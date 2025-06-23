import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "referral-app-c8e00.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "referral-app-c8e00",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "referral-app-c8e00.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "343436249776",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:343436249776:web:d5607bd9bc9bc2214b0975"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Debug log to check config
console.log('Firebase Config:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  apiKey: firebaseConfig.apiKey ? '***exists***' : 'missing'
});

// Test function to check all referrals (for debugging)
import { collection, getDocs, query, where } from 'firebase/firestore';
window.testFirestore = async () => {
  try {
    // Test 1: Get all referrals
    const allSnapshot = await getDocs(collection(db, 'referrals'));
    console.log('=== ALL REFERRALS ===');
    console.log('Total referrals in database:', allSnapshot.size);
    allSnapshot.docs.forEach(doc => {
      console.log('Document:', doc.id, doc.data());
    });

    // Test 2: Get referrals for current user
    const user = auth.currentUser;
    if (user) {
      console.log('=== USER REFERRALS ===');
      console.log('Current user:', user.uid);
      const userQuery = query(collection(db, 'referrals'), where('userId', '==', user.uid));
      const userSnapshot = await getDocs(userQuery);
      console.log('User referrals found:', userSnapshot.size);
      userSnapshot.docs.forEach(doc => {
        console.log('User document:', doc.id, doc.data());
      });
    } else {
      console.log('No authenticated user');
    }

    // Test 3: Check permissions
    console.log('=== TESTING PERMISSIONS ===');
    try {
      await getDocs(collection(db, 'test'));
      console.log('Basic read permission: OK');
    } catch (permError) {
      console.error('Permission error:', permError.code, permError.message);
    }
    
  } catch (error) {
    console.error('Error testing Firestore:', error);
  }
};

// Migration function to add userId to existing referrals
window.migrateReferrals = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error('No authenticated user');
      return;
    }

    console.log('Starting migration for user:', user.uid);
    
    // Get all referrals that don't have a userId
    const allSnapshot = await getDocs(collection(db, 'referrals'));
    const referralsToUpdate = [];
    
    allSnapshot.docs.forEach(doc => {
      const data = doc.data();
      if (!data.userId) {
        referralsToUpdate.push({
          id: doc.id,
          data: data
        });
      }
    });
    
    console.log(`Found ${referralsToUpdate.length} referrals to migrate`);
    
    if (referralsToUpdate.length === 0) {
      console.log('No referrals need migration');
      return;
    }

    // Ask for confirmation
    const confirm = window.confirm(`Add your user ID to ${referralsToUpdate.length} existing referrals?`);
    if (!confirm) {
      console.log('Migration cancelled');
      return;
    }

    // Import updateDoc and doc
    const { updateDoc, doc } = await import('firebase/firestore');
    
    // Update each referral
    for (const referral of referralsToUpdate) {
      console.log(`Updating referral ${referral.id}:`, referral.data.customerName);
      const docRef = doc(db, 'referrals', referral.id);
      await updateDoc(docRef, {
        userId: user.uid,
        updatedAt: new Date()
      });
    }
    
    console.log('Migration completed successfully!');
    console.log('Your referrals should now appear in the app');
    
  } catch (error) {
    console.error('Error during migration:', error);
  }
};

// Migration function to add userId to existing payments
window.migratePayments = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error('No authenticated user');
      return;
    }

    console.log('Starting payments migration for user:', user.uid);
    
    // Get all payments that don't have a userId
    const allSnapshot = await getDocs(collection(db, 'payments'));
    const paymentsToUpdate = [];
    
    allSnapshot.docs.forEach(doc => {
      const data = doc.data();
      if (!data.userId) {
        paymentsToUpdate.push({
          id: doc.id,
          data: data
        });
      }
    });
    
    console.log(`Found ${paymentsToUpdate.length} payments to migrate`);
    
    if (paymentsToUpdate.length === 0) {
      console.log('No payments need migration');
      return;
    }

    // Ask for confirmation
    const confirm = window.confirm(`Add your user ID to ${paymentsToUpdate.length} existing payments?`);
    if (!confirm) {
      console.log('Payments migration cancelled');
      return;
    }

    // Import updateDoc and doc
    const { updateDoc, doc } = await import('firebase/firestore');
    
    // Update each payment
    for (const payment of paymentsToUpdate) {
      console.log(`Updating payment ${payment.id}`);
      const docRef = doc(db, 'payments', payment.id);
      await updateDoc(docRef, {
        userId: user.uid,
        updatedAt: new Date()
      });
    }
    
    console.log('Payments migration completed successfully!');
    
  } catch (error) {
    console.error('Error during payments migration:', error);
  }
};

// Create initial team for existing users
window.createInitialTeam = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error('No authenticated user');
      return;
    }

    // Import team service
    const { createTeam, getUserTeams } = await import('./services/teamService');
    
    // Check if user already has teams
    const existingTeams = await getUserTeams();
    if (existingTeams.length > 0) {
      console.log('User already has teams:', existingTeams.length);
      return;
    }

    // Create initial team
    const teamName = 'My Business';
    const team = await createTeam(teamName);
    
    console.log('Initial team created:', team);
    console.log('You can now invite business partners to this team');
    
  } catch (error) {
    console.error('Error creating initial team:', error);
  }
};

// Debug payment validity
window.debugPaymentValidity = () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error('No authenticated user');
      return;
    }

    // Test with March 2025 specifically
    const selectedMonth = '2025-03';
    console.log('Testing month:', selectedMonth);

    // Test the validation function with sample data
    const testReferrals = [
      { customerName: 'MyVOIP', startDate: '2025-02-28' },
      { customerName: 'RIT', startDate: '2025-02-28' }
    ];

    testReferrals.forEach(referral => {
      // Fix timezone issues by parsing dates carefully
      const startDateParts = referral.startDate.split('-');
      const startDate = new Date(parseInt(startDateParts[0]), parseInt(startDateParts[1]) - 1, parseInt(startDateParts[2]));
      
      const paymentMonthParts = selectedMonth.split('-');
      const paymentMonth = new Date(parseInt(paymentMonthParts[0]), parseInt(paymentMonthParts[1]) - 1, 1);
      
      const firstPaymentMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1);
      
      console.log(`\n=== ${referral.customerName} ===`);
      console.log('Start date:', referral.startDate);
      console.log('Start date object:', startDate);
      console.log('Payment month:', paymentMonth);
      console.log('First payment month:', firstPaymentMonth);
      console.log('Is valid?', paymentMonth >= firstPaymentMonth);
    });

  } catch (error) {
    console.error('Error debugging payment validity:', error);
  }
};

// Check and fix referral start dates
window.checkReferralDates = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error('No authenticated user');
      return;
    }

    console.log('=== Checking Referral Start Dates ===');
    
    // Get all referrals
    const allSnapshot = await getDocs(collection(db, 'referrals'));
    console.log('Total referrals in database:', allSnapshot.size);
    
    allSnapshot.docs.forEach(doc => {
      const data = doc.data();
      console.log(`${data.customerName}: startDate = ${data.startDate}`);
    });

    // Ask if user wants to fix MyVOIP and RIT dates
    const shouldFix = confirm('Do you want to change MyVOIP and RIT start dates back to 2025-02-28?');
    if (!shouldFix) {
      return;
    }

    // Fix the start dates
    const { updateDoc, doc: docRef } = await import('firebase/firestore');
    
    const referralsToFix = [];
    allSnapshot.docs.forEach(docSnapshot => {
      const data = docSnapshot.data();
      if ((data.customerName === 'MyVOIP' || data.customerName === 'RIT') && data.startDate === '2025-03-01') {
        referralsToFix.push({
          id: docSnapshot.id,
          name: data.customerName
        });
      }
    });

    for (const referral of referralsToFix) {
      console.log(`Updating ${referral.name} start date to 2025-02-28`);
      const refDoc = docRef(db, 'referrals', referral.id);
      await updateDoc(refDoc, {
        startDate: '2025-02-28',
        updatedAt: new Date()
      });
    }

    console.log('Start dates updated successfully!');
    console.log('MyVOIP and RIT should now appear in March payment tracking');

  } catch (error) {
    console.error('Error checking referral dates:', error);
  }
};

// Debug payment data
window.debugPaymentData = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error('No authenticated user');
      return;
    }

    console.log('=== Payment Debug ===');
    
    // Get all referrals
    const referralsSnapshot = await getDocs(collection(db, 'referrals'));
    console.log('Referrals:');
    referralsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      console.log(`${data.customerName}: ID = ${doc.id}`);
    });

    // Get all payments
    const paymentsSnapshot = await getDocs(collection(db, 'payments'));
    console.log('\nPayments:');
    paymentsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      console.log(`Payment ID ${doc.id}:`, data);
    });

  } catch (error) {
    console.error('Error debugging payment data:', error);
  }
};

// Fix Yeavoice status
window.fixYeavoiceStatus = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error('No authenticated user');
      return;
    }

    console.log('=== Checking Yeavoice Status ===');
    
    // Get all referrals
    const referralsSnapshot = await getDocs(collection(db, 'referrals'));
    let yeavoiceRef = null;
    
    referralsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      console.log(`${data.customerName}: status = ${data.status}, ID = ${doc.id}`);
      if (data.customerName === 'Yeavoice') {
        yeavoiceRef = { id: doc.id, ...data };
      }
    });

    if (!yeavoiceRef) {
      console.log('Yeavoice not found');
      return;
    }

    if (yeavoiceRef.status === 'Active') {
      console.log('Yeavoice is already Active');
      return;
    }

    const shouldFix = confirm(`Yeavoice status is "${yeavoiceRef.status}". Change to "Active"?`);
    if (!shouldFix) return;

    // Update Yeavoice to Active
    const { updateDoc, doc: docRef } = await import('firebase/firestore');
    const refDoc = docRef(db, 'referrals', yeavoiceRef.id);
    await updateDoc(refDoc, {
      status: 'Active',
      updatedAt: new Date()
    });

    console.log('Yeavoice status updated to Active');
    console.log('Yeavoice should now appear in payment tracking');

  } catch (error) {
    console.error('Error fixing Yeavoice status:', error);
  }
};

// Add end date to Yeavoice
window.addYeavoiceEndDate = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error('No authenticated user');
      return;
    }

    console.log('=== Adding End Date to Yeavoice ===');
    
    // Get all referrals
    const referralsSnapshot = await getDocs(collection(db, 'referrals'));
    let yeavoiceRef = null;
    
    referralsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.customerName === 'Yeavoice') {
        yeavoiceRef = { id: doc.id, ...data };
      }
    });

    if (!yeavoiceRef) {
      console.log('Yeavoice not found');
      return;
    }

    console.log('Current Yeavoice data:', yeavoiceRef);
    
    if (yeavoiceRef.endDate) {
      console.log(`Yeavoice already has end date: ${yeavoiceRef.endDate}`);
      return;
    }

    // Ask for end date
    const endDate = prompt('Enter Yeavoice end date (YYYY-MM-DD format):', '2025-03-31');
    if (!endDate) return;

    // Validate date format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(endDate)) {
      console.error('Invalid date format. Use YYYY-MM-DD');
      return;
    }

    // Confirm the date will display correctly
    const [year, month, day] = endDate.split('-');
    const testDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    console.log('Date will display as:', testDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
    
    const confirmDate = confirm(`Set end date to: ${testDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}?`);
    if (!confirmDate) return;

    // Update Yeavoice with end date
    const { updateDoc, doc: docRef } = await import('firebase/firestore');
    const refDoc = docRef(db, 'referrals', yeavoiceRef.id);
    await updateDoc(refDoc, {
      endDate: endDate,
      status: 'Inactive',
      updatedAt: new Date()
    });

    console.log(`Yeavoice end date set to: ${endDate}`);
    console.log('Yeavoice should now only show payments through March 2025');

  } catch (error) {
    console.error('Error adding end date to Yeavoice:', error);
  }
};

// Debug invoiced payments
window.debugInvoicedPayments = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error('No authenticated user');
      return;
    }
    
    console.log('=== INVOICED PAYMENTS BREAKDOWN ===');
    
    // Get all payments
    const paymentsSnapshot = await getDocs(collection(db, 'payments'));
    let totalInvoiced = 0;
    
    paymentsSnapshot.docs.forEach(doc => {
      const payment = doc.data();
      if (payment.status === 'paid' && payment.isInvoiced) {
        console.log(`Payment ID: ${doc.id}`);
        console.log(`Referral ID: ${payment.referralId}`);
        console.log(`Month: ${payment.month}`);
        console.log(`Amount: $${payment.amount}`);
        console.log(`Created: ${payment.createdAt?.toDate()}`);
        console.log('---');
        totalInvoiced += payment.amount;
      }
    });
    
    console.log(`TOTAL INVOICED: $${totalInvoiced.toFixed(2)}`);
  } catch (error) {
    console.error('Error debugging invoiced payments:', error);
  }
};