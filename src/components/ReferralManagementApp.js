import React, { useState, useEffect } from 'react';
import { PlusCircle } from 'lucide-react';
import { 
  addReferral, 
  addPayment, 
  subscribeToReferrals, 
  subscribeToPayments,
  updatePaymentStatus,
  updateInvoiceStatus,
  deletePayment,
  deleteReferral,
  updateReferral
} from '../services/database';

import StatsCards from './StatsCards';
import AddReferralForm from './AddReferralForm';
import AddPaymentForm from './AddPaymentForm';
import ReferralsList from './ReferralsList';
import PaymentTracking from './PaymentTracking';
import MessageBanner from './MessageBanner';
import LoadingSpinner from './LoadingSpinner';

const ReferralManagementApp = () => {
  // Application state
  const [referrals, setReferrals] = useState([]);
  const [payments, setPayments] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAddPaymentForm, setShowAddPaymentForm] = useState(false);
  const [editingReferral, setEditingReferral] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });

  const [formData, setFormData] = useState({
    customerName: '',
    monthlyValue: '',
    status: 'Active',
    startDate: ''
  });

  const [paymentFormData, setPaymentFormData] = useState({
    customerId: '',
    month: '',
    amount: '',
    paymentStatus: 'paid',
    invoiceStatus: false
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  // Initialize Firebase subscriptions
  useEffect(() => {
    const unsubscribeReferrals = subscribeToReferrals((referralsData) => {
      setReferrals(referralsData);
      setLoading(false);
    });

    const unsubscribePayments = subscribeToPayments((paymentsData) => {
      setPayments(paymentsData);
    });

    return () => {
      unsubscribeReferrals();
      unsubscribePayments();
    };
  }, []);

  // Form handlers
  const resetForm = () => {
    setFormData({
      customerName: '',
      monthlyValue: '',
      status: 'Active',
      startDate: ''
    });
    setShowAddForm(false);
    setEditingReferral(null);
    setShowSuccessMessage('');
    setShowErrorMessage('');
  };

  const resetPaymentForm = () => {
    setPaymentFormData({
      customerId: '',
      month: '',
      amount: '',
      paymentStatus: 'paid',
      invoiceStatus: false
    });
    setShowAddPaymentForm(false);
    setShowSuccessMessage('');
    setShowErrorMessage('');
  };

  const handleSubmit = async () => {
    if (!formData.customerName || !formData.monthlyValue || !formData.startDate) {
      setShowErrorMessage('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      const referralData = {
        customerName: formData.customerName,
        monthlyValue: parseFloat(formData.monthlyValue),
        status: formData.status,
        startDate: formData.startDate
      };

      if (editingReferral) {
        await updateReferral(editingReferral.id, referralData);
        setShowSuccessMessage('Referral updated successfully!');
      } else {
        await addReferral(referralData);
        setShowSuccessMessage('Referral added successfully!');
      }

      resetForm();
    } catch (error) {
      console.error('Error saving referral:', error);
      setShowErrorMessage('Failed to save referral: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPayment = async () => {
    setShowSuccessMessage('');
    setShowErrorMessage('');
    
    if (!paymentFormData.customerId || !paymentFormData.month || !paymentFormData.amount) {
      setShowErrorMessage('Please fill in all required fields');
      return;
    }

    const customer = referrals.find(r => r.id === paymentFormData.customerId);
    if (!customer) {
      setShowErrorMessage('Customer not found');
      return;
    }

    try {
      setLoading(true);
      await addPayment(paymentFormData);
      setShowSuccessMessage(`Payment added successfully for ${customer.customerName}!`);
      
      setTimeout(() => {
        resetPaymentForm();
      }, 2000);
    } catch (error) {
      console.error('Error adding payment:', error);
      setShowErrorMessage('Failed to add payment: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (referral) => {
    setEditingReferral(referral);
    setFormData({
      customerName: referral.customerName,
      monthlyValue: referral.monthlyValue.toString(),
      status: referral.status,
      startDate: referral.startDate
    });
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteReferral(id);
      setShowSuccessMessage('Referral deleted successfully');
    } catch (error) {
      console.error('Error deleting referral:', error);
      setShowErrorMessage('Failed to delete referral: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePayment = async (customerId, month) => {
    try {
      setLoading(true);
      await deletePayment(customerId, month);
      setShowSuccessMessage('Payment deleted successfully');
    } catch (error) {
      console.error('Error deleting payment:', error);
      setShowErrorMessage('Failed to delete payment: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePaymentStatus = async (customerId, month, status) => {
    try {
      await updatePaymentStatus(customerId, month, status);
    } catch (error) {
      console.error('Error updating payment status:', error);
      setShowErrorMessage('Failed to update payment status');
    }
  };

  const handleUpdateInvoiceStatus = async (customerId, month, isInvoiced) => {
    try {
      await updateInvoiceStatus(customerId, month, isInvoiced);
    } catch (error) {
      console.error('Error updating invoice status:', error);
      setShowErrorMessage('Failed to update invoice status');
    }
  };

  // Helper functions
  const getPaymentStatus = (customerId, month) => {
    const customerPayments = payments[customerId] || [];
    const payment = customerPayments.find(p => p.month === month);
    return payment?.status || 'pending';
  };

  const getInvoiceStatus = (customerId, month) => {
    const customerPayments = payments[customerId] || [];
    const payment = customerPayments.find(p => p.month === month);
    return payment?.isInvoiced || false;
  };

  const getPaymentAmount = (customerId, month) => {
    const customerPayments = payments[customerId] || [];
    const payment = customerPayments.find(p => p.month === month);
    return payment?.amount || null;
  };

  const isPaymentValidForMonth = (referral, monthKey) => {
    const startDate = new Date(referral.startDate);
    const paymentMonth = new Date(monthKey + '-01');
    return paymentMonth >= startDate;
  };

  const generateMonthsArray = () => {
    const months = [];
    const currentDate = new Date();
    for (let i = 5; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      months.push({ key: monthKey, name: monthName });
    }
    return months;
  };

  const getPaymentStats = () => {
    const activeRefs = referrals.filter(ref => ref.status === 'Active');
    
    const currentMonthPayments = activeRefs.map(ref => ({
      customer: ref.customerName,
      value: ref.monthlyValue,
      status: getPaymentStatus(ref.id, selectedMonth),
      invoiced: getInvoiceStatus(ref.id, selectedMonth)
    }));

    const totalExpected = currentMonthPayments.reduce((sum, p) => sum + p.value, 0);
    const totalReceived = currentMonthPayments
      .filter(p => p.status === 'paid')
      .reduce((sum, p) => sum + p.value, 0);
    const totalPending = currentMonthPayments
      .filter(p => p.status === 'pending')
      .reduce((sum, p) => sum + p.value, 0);

    let totalInvoiced = 0;
    let totalToBeInvoiced = 0;

    referrals.forEach(ref => {
      const customerPayments = payments[ref.id] || [];
      customerPayments.forEach(payment => {
        if (payment.status === 'paid') {
          if (payment.isInvoiced) {
            totalInvoiced += payment.amount;
          } else {
            totalToBeInvoiced += payment.amount;
          }
        }
      });
    });

    return { 
      totalExpected, 
      totalReceived, 
      totalPending, 
      currentMonthPayments,
      totalInvoiced,
      totalToBeInvoiced
    };
  };

  const totalMonthlyValue = referrals
    .filter(ref => ref.status === 'Active')
    .reduce((sum, ref) => sum + ref.monthlyValue, 0);

  const activeReferrals = referrals.filter(ref => ref.status === 'Active').length;
  const paymentStats = getPaymentStats();

  if (loading && referrals.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Referral Management</h1>
              <p className="text-gray-600">Firebase-powered referral management with real-time sync</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              disabled={loading}
            >
              <PlusCircle size={20} />
              Add Referral
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <StatsCards 
          totalMonthlyValue={totalMonthlyValue}
          activeReferrals={activeReferrals}
          paymentStats={paymentStats}
        />

        {/* Success/Error Messages */}
        <MessageBanner 
          message={showSuccessMessage} 
          type="success" 
          onClose={() => setShowSuccessMessage('')} 
        />
        <MessageBanner 
          message={showErrorMessage} 
          type="error" 
          onClose={() => setShowErrorMessage('')} 
        />

        {/* Add Payment Form */}
        <AddPaymentForm
          showAddPaymentForm={showAddPaymentForm}
          paymentFormData={paymentFormData}
          setPaymentFormData={setPaymentFormData}
          handleAddPayment={handleAddPayment}
          resetPaymentForm={resetPaymentForm}
          referrals={referrals}
          generateMonthsArray={generateMonthsArray}
          loading={loading}
        />

        {/* Add/Edit Referral Form */}
        <AddReferralForm
          showAddForm={showAddForm}
          editingReferral={editingReferral}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
          loading={loading}
        />

        {/* Main Content - Referrals List */}
        <ReferralsList
          referrals={referrals}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          setShowAddPaymentForm={setShowAddPaymentForm}
          loading={loading}
        />

        {/* Payment Tracking Section */}
        <PaymentTracking
          referrals={referrals}
          payments={payments}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          generateMonthsArray={generateMonthsArray}
          getPaymentStatus={getPaymentStatus}
          getInvoiceStatus={getInvoiceStatus}
          getPaymentAmount={getPaymentAmount}
          isPaymentValidForMonth={isPaymentValidForMonth}
          handleUpdatePaymentStatus={handleUpdatePaymentStatus}
          handleUpdateInvoiceStatus={handleUpdateInvoiceStatus}
          handleDeletePayment={handleDeletePayment}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ReferralManagementApp;