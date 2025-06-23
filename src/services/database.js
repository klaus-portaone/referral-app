import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  where, 
  onSnapshot,
  orderBy,
  writeBatch
} from 'firebase/firestore';
import { db, auth } from '@/firebase';
import { getUserTeams } from './teamService';

// ========================
// REFERRAL OPERATIONS
// ========================

/**
 * Add a new referral to the database
 */
export const addReferral = async (referralData) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    
    const docRef = await addDoc(collection(db, 'referrals'), {
      customerName: referralData.customerName,
      monthlyValue: referralData.monthlyValue,
      status: referralData.status,
      startDate: referralData.startDate,
      endDate: referralData.endDate,
      userId: user.uid,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    console.log('Referral added with ID:', docRef.id);
    return { id: docRef.id, ...referralData };
  } catch (error) {
    console.error('Error adding referral:', error);
    throw new Error('Failed to add referral: ' + error.message);
  }
};

/**
 * Update an existing referral
 */
export const updateReferral = async (id, referralData) => {
  try {
    const referralRef = doc(db, 'referrals', id);
    await updateDoc(referralRef, {
      customerName: referralData.customerName,
      monthlyValue: referralData.monthlyValue,
      status: referralData.status,
      startDate: referralData.startDate,
      endDate: referralData.endDate,
      updatedAt: new Date()
    });
    
    console.log('Referral updated:', id);
    return { id, ...referralData };
  } catch (error) {
    console.error('Error updating referral:', error);
    throw new Error('Failed to update referral: ' + error.message);
  }
};

/**
 * Delete a referral and all its related payments
 */
export const deleteReferral = async (id) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    
    const batch = writeBatch(db);
    
    // Delete the referral
    const referralRef = doc(db, 'referrals', id);
    batch.delete(referralRef);
    
    // Find and delete all related payments
    const paymentsQuery = query(
      collection(db, 'payments'), 
      where('referralId', '==', id),
      where('userId', '==', user.uid)
    );
    const paymentsSnapshot = await getDocs(paymentsQuery);
    
    paymentsSnapshot.docs.forEach(paymentDoc => {
      batch.delete(paymentDoc.ref);
    });
    
    // Execute batch delete
    await batch.commit();
    
    console.log('Referral and related payments deleted:', id);
    return id;
  } catch (error) {
    console.error('Error deleting referral:', error);
    throw new Error('Failed to delete referral: ' + error.message);
  }
};

/**
 * Get all referrals (one-time fetch)
 */
export const getReferrals = async () => {
  try {
    const q = query(
      collection(db, 'referrals'), 
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const referrals = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log('Referrals loaded:', referrals.length);
    return referrals;
  } catch (error) {
    console.error('Error getting referrals:', error);
    throw new Error('Failed to load referrals: ' + error.message);
  }
};

/**
 * Subscribe to real-time referral updates
 */
export const subscribeToReferrals = async (callback) => {
  try {
    const user = auth.currentUser;
    console.log('subscribeToReferrals - Current user:', user?.uid || 'No user');
    
    if (!user) {
      console.log('No authenticated user, returning empty array');
      callback([]);
      return () => {};
    }
    
    // Get user's teams to include team members' referrals
    const teams = await getUserTeams();
    const teamMemberIds = new Set([user.uid]); // Include current user
    
    teams.forEach(team => {
      team.members.forEach(memberId => teamMemberIds.add(memberId));
    });
    
    const memberIds = Array.from(teamMemberIds);
    console.log('Setting up referrals query for team members:', memberIds);
    
    const q = query(
      collection(db, 'referrals'),
      where('userId', 'in', memberIds)
    );
    
    console.log('About to start onSnapshot listener...');
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log('Firestore snapshot received:', snapshot.size, 'documents');
      const referrals = snapshot.docs.map(doc => {
        const data = doc.data();
        console.log('Document data:', doc.id, data);
        return {
          id: doc.id,
          ...data
        };
      }).sort((a, b) => {
        // Sort by createdAt descending (newest first)
        const aTime = a.createdAt?.toDate?.() || new Date(0);
        const bTime = b.createdAt?.toDate?.() || new Date(0);
        return bTime - aTime;
      });
      
      console.log('Processed referrals:', referrals.length, referrals);
      callback(referrals);
    }, (error) => {
      console.error('Error in referrals subscription:', error);
      callback([]); // Return empty array on error
    });
    
    return unsubscribe;
  } catch (error) {
    console.error('Error setting up referrals subscription:', error);
    return () => {}; // Return empty function
  }
};

// ========================
// PAYMENT OPERATIONS
// ========================

/**
 * Add a new payment record
 */
export const addPayment = async (paymentData) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    
    const docRef = await addDoc(collection(db, 'payments'), {
      referralId: paymentData.customerId,
      month: paymentData.month,
      status: paymentData.paymentStatus,
      amount: parseFloat(paymentData.amount),
      isInvoiced: paymentData.invoiceStatus || false,
      userId: user.uid,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    console.log('Payment added with ID:', docRef.id);
    return { id: docRef.id, ...paymentData };
  } catch (error) {
    console.error('Error adding payment:', error);
    throw new Error('Failed to add payment: ' + error.message);
  }
};

/**
 * Update payment status (paid, pending, overdue)
 */
export const updatePaymentStatus = async (referralId, month, status) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    
    const paymentsQuery = query(
      collection(db, 'payments'),
      where('referralId', '==', referralId),
      where('month', '==', month),
      where('userId', '==', user.uid)
    );
    const paymentsSnapshot = await getDocs(paymentsQuery);
    
    if (!paymentsSnapshot.empty) {
      const paymentDoc = paymentsSnapshot.docs[0];
      await updateDoc(paymentDoc.ref, { 
        status: status,
        updatedAt: new Date()
      });
      console.log('Payment status updated:', referralId, month, status);
    } else {
      // If no payment exists, create one
      await addDoc(collection(db, 'payments'), {
        referralId: referralId,
        month: month,
        status: status,
        amount: 0, // Default amount, should be updated later
        isInvoiced: false,
        userId: user.uid,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log('New payment record created:', referralId, month, status);
    }
  } catch (error) {
    console.error('Error updating payment status:', error);
    throw new Error('Failed to update payment status: ' + error.message);
  }
};

/**
 * Update invoice status (invoiced or not invoiced)
 */
export const updateInvoiceStatus = async (referralId, month, isInvoiced) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    
    const paymentsQuery = query(
      collection(db, 'payments'),
      where('referralId', '==', referralId),
      where('month', '==', month),
      where('userId', '==', user.uid)
    );
    const paymentsSnapshot = await getDocs(paymentsQuery);
    
    if (!paymentsSnapshot.empty) {
      const paymentDoc = paymentsSnapshot.docs[0];
      await updateDoc(paymentDoc.ref, { 
        isInvoiced: isInvoiced,
        invoicedAt: isInvoiced ? new Date() : null,
        updatedAt: new Date()
      });
      console.log('Invoice status updated:', referralId, month, isInvoiced);
    } else {
      console.warn('No payment found to update invoice status:', referralId, month);
    }
  } catch (error) {
    console.error('Error updating invoice status:', error);
    throw new Error('Failed to update invoice status: ' + error.message);
  }
};

/**
 * Delete a specific payment record
 */
export const deletePayment = async (referralId, month) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    
    const paymentsQuery = query(
      collection(db, 'payments'),
      where('referralId', '==', referralId),
      where('month', '==', month),
      where('userId', '==', user.uid)
    );
    const paymentsSnapshot = await getDocs(paymentsQuery);
    
    const deletePromises = paymentsSnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    
    console.log('Payment(s) deleted:', referralId, month);
  } catch (error) {
    console.error('Error deleting payment:', error);
    throw new Error('Failed to delete payment: ' + error.message);
  }
};

/**
 * Get all payments (one-time fetch)
 */
export const getPayments = async () => {
  try {
    const q = query(
      collection(db, 'payments'), 
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const paymentsData = {};
    querySnapshot.docs.forEach(doc => {
      const payment = doc.data();
      const referralId = payment.referralId;
      
      if (!paymentsData[referralId]) {
        paymentsData[referralId] = [];
      }
      
      paymentsData[referralId].push({
        id: doc.id,
        month: payment.month,
        status: payment.status,
        amount: payment.amount,
        isInvoiced: payment.isInvoiced,
        createdAt: payment.createdAt,
        updatedAt: payment.updatedAt,
        invoicedAt: payment.invoicedAt
      });
    });
    
    console.log('Payments loaded for referrals:', Object.keys(paymentsData).length);
    return paymentsData;
  } catch (error) {
    console.error('Error getting payments:', error);
    throw new Error('Failed to load payments: ' + error.message);
  }
};

/**
 * Subscribe to real-time payment updates
 */
export const subscribeToPayments = async (callback) => {
  try {
    const user = auth.currentUser;
    console.log('subscribeToPayments - Current user:', user?.uid || 'No user');
    
    if (!user) {
      console.log('No authenticated user, returning empty object');
      callback({});
      return () => {};
    }
    
    // Get user's teams to include team members' payments
    const teams = await getUserTeams();
    const teamMemberIds = new Set([user.uid]); // Include current user
    
    teams.forEach(team => {
      team.members.forEach(memberId => teamMemberIds.add(memberId));
    });
    
    const memberIds = Array.from(teamMemberIds);
    console.log('Setting up payments query for team members:', memberIds);
    
    const q = query(
      collection(db, 'payments'),
      where('userId', 'in', memberIds)
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const paymentsData = {};
      
      snapshot.docs.forEach(doc => {
        const payment = doc.data();
        const referralId = payment.referralId;
        
        if (!paymentsData[referralId]) {
          paymentsData[referralId] = [];
        }
        
        paymentsData[referralId].push({
          id: doc.id,
          month: payment.month,
          status: payment.status,
          amount: payment.amount,
          isInvoiced: payment.isInvoiced,
          createdAt: payment.createdAt,
          updatedAt: payment.updatedAt,
          invoicedAt: payment.invoicedAt
        });
      });
      
      // Sort payments within each referral by date
      Object.keys(paymentsData).forEach(referralId => {
        paymentsData[referralId].sort((a, b) => {
          const aTime = a.createdAt?.toDate?.() || new Date(0);
          const bTime = b.createdAt?.toDate?.() || new Date(0);
          return bTime - aTime;
        });
      });
      
      console.log('Real-time payments update for referrals:', Object.keys(paymentsData).length);
      callback(paymentsData);
    }, (error) => {
      console.error('Error in payments subscription:', error);
      callback({}); // Return empty object on error
    });
    
    return unsubscribe;
  } catch (error) {
    console.error('Error setting up payments subscription:', error);
    return () => {}; // Return empty function
  }
};

// ========================
// UTILITY FUNCTIONS
// ========================

/**
 * Get payments for a specific referral
 */
export const getPaymentsForReferral = async (referralId) => {
  try {
    const q = query(
      collection(db, 'payments'),
      where('referralId', '==', referralId),
      orderBy('month', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const payments = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log('Payments loaded for referral:', referralId, payments.length);
    return payments;
  } catch (error) {
    console.error('Error getting payments for referral:', error);
    throw new Error('Failed to load payments for referral: ' + error.message);
  }
};

/**
 * Get payments for a specific month across all referrals
 */
export const getPaymentsForMonth = async (month) => {
  try {
    const q = query(
      collection(db, 'payments'),
      where('month', '==', month),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    const payments = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log('Payments loaded for month:', month, payments.length);
    return payments;
  } catch (error) {
    console.error('Error getting payments for month:', error);
    throw new Error('Failed to load payments for month: ' + error.message);
  }
};

/**
 * Get all unpaid payments (for follow-up)
 */
export const getUnpaidPayments = async () => {
  try {
    const q = query(
      collection(db, 'payments'),
      where('status', 'in', ['pending', 'overdue']),
      orderBy('month', 'asc')
    );
    const querySnapshot = await getDocs(q);
    
    const unpaidPayments = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log('Unpaid payments loaded:', unpaidPayments.length);
    return unpaidPayments;
  } catch (error) {
    console.error('Error getting unpaid payments:', error);
    throw new Error('Failed to load unpaid payments: ' + error.message);
  }
};

/**
 * Get all uninvoiced payments (for invoicing)
 */
export const getUninvoicedPayments = async () => {
  try {
    const q = query(
      collection(db, 'payments'),
      where('status', '==', 'paid'),
      where('isInvoiced', '==', false),
      orderBy('month', 'asc')
    );
    const querySnapshot = await getDocs(q);
    
    const uninvoicedPayments = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    console.log('Uninvoiced payments loaded:', uninvoicedPayments.length);
    return uninvoicedPayments;
  } catch (error) {
    console.error('Error getting uninvoiced payments:', error);
    throw new Error('Failed to load uninvoiced payments: ' + error.message);
  }
};

/**
 * Bulk update invoice status for multiple payments
 */
export const bulkUpdateInvoiceStatus = async (paymentIds, isInvoiced) => {
  try {
    const batch = writeBatch(db);
    
    paymentIds.forEach(paymentId => {
      const paymentRef = doc(db, 'payments', paymentId);
      batch.update(paymentRef, {
        isInvoiced: isInvoiced,
        invoicedAt: isInvoiced ? new Date() : null,
        updatedAt: new Date()
      });
    });
    
    await batch.commit();
    console.log('Bulk invoice status update completed:', paymentIds.length);
  } catch (error) {
    console.error('Error in bulk invoice update:', error);
    throw new Error('Failed to bulk update invoice status: ' + error.message);
  }
};

// ========================
// ANALYTICS FUNCTIONS
// ========================

/**
 * Get revenue statistics
 */
export const getRevenueStats = async () => {
  try {
    const [referralsSnapshot, paymentsSnapshot] = await Promise.all([
      getDocs(collection(db, 'referrals')),
      getDocs(collection(db, 'payments'))
    ]);
    
    const referrals = referralsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    const payments = paymentsSnapshot.docs.map(doc => doc.data());
    
    const stats = {
      totalReferrals: referrals.length,
      activeReferrals: referrals.filter(r => r.status === 'Active').length,
      totalPayments: payments.length,
      paidPayments: payments.filter(p => p.status === 'paid').length,
      totalRevenue: payments
        .filter(p => p.status === 'paid')
        .reduce((sum, p) => sum + p.amount, 0),
      uninvoicedRevenue: payments
        .filter(p => p.status === 'paid' && !p.isInvoiced)
        .reduce((sum, p) => sum + p.amount, 0),
      monthlyExpectedRevenue: referrals
        .filter(r => r.status === 'Active')
        .reduce((sum, r) => sum + r.monthlyValue, 0)
    };
    
    console.log('Revenue stats calculated:', stats);
    return stats;
  } catch (error) {
    console.error('Error calculating revenue stats:', error);
    throw new Error('Failed to calculate revenue stats: ' + error.message);
  }
};

export default {
  // Referral operations
  addReferral,
  updateReferral,
  deleteReferral,
  getReferrals,
  subscribeToReferrals,
  
  // Payment operations
  addPayment,
  updatePaymentStatus,
  updateInvoiceStatus,
  deletePayment,
  getPayments,
  subscribeToPayments,
  
  // Utility functions
  getPaymentsForReferral,
  getPaymentsForMonth,
  getUnpaidPayments,
  getUninvoicedPayments,
  bulkUpdateInvoiceStatus,
  
  // Analytics
  getRevenueStats
};