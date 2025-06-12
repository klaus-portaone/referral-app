import React, { useState, useEffect } from 'react';
import { PlusCircle, Edit3, Trash2, DollarSign, Users, TrendingUp, Calendar, Check, X, Clock, FileText, Trash } from 'lucide-react';
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
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="animate-spin mx-auto mb-4 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Referrals</h2>
          <p className="text-gray-600">Connecting to Firebase...</p>
        </div>
      </div>
    );
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Expected Monthly</p>
                <p className="text-xl font-bold text-gray-900">${totalMonthlyValue.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <DollarSign className="text-green-600" size={18} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Received This Month</p>
                <p className="text-xl font-bold text-gray-900">${paymentStats.totalReceived.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <Check className="text-blue-600" size={18} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending This Month</p>
                <p className="text-xl font-bold text-gray-900">${paymentStats.totalPending.toLocaleString()}</p>
              </div>
              <div className="bg-yellow-100 p-2 rounded-full">
                <Clock className="text-yellow-600" size={18} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-indigo-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Invoiced</p>
                <p className="text-xl font-bold text-gray-900">${paymentStats.totalInvoiced.toLocaleString()}</p>
              </div>
              <div className="bg-indigo-100 p-2 rounded-full">
                <TrendingUp className="text-indigo-600" size={18} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">To Be Invoiced</p>
                <p className="text-xl font-bold text-gray-900">${paymentStats.totalToBeInvoiced.toLocaleString()}</p>
              </div>
              <div className="bg-orange-100 p-2 rounded-full">
                <Calendar className="text-orange-600" size={18} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Referrals</p>
                <p className="text-xl font-bold text-gray-900">{activeReferrals}</p>
              </div>
              <div className="bg-purple-100 p-2 rounded-full">
                <Users className="text-purple-600" size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Success/Error Messages */}
        {showSuccessMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-6 flex items-center gap-2">
            <Check size={20} />
            {showSuccessMessage}
            <button 
              onClick={() => setShowSuccessMessage('')}
              className="ml-auto text-green-700 hover:text-green-900"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {showErrorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl mb-6 flex items-center gap-2">
            <X size={20} />
            {showErrorMessage}
            <button 
              onClick={() => setShowErrorMessage('')}
              className="ml-auto text-red-700 hover:text-red-900"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Add Payment Form */}
        {showAddPaymentForm && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <DollarSign size={24} />
              Add Payment Record
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer *
                </label>
                <select
                  value={paymentFormData.customerId}
                  onChange={(e) => setPaymentFormData(prev => ({ ...prev, customerId: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={loading}
                >
                  <option value="">Select a customer</option>
                  {referrals.map(ref => (
                    <option key={ref.id} value={ref.id}>
                      {ref.customerName} ({ref.status})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Month *
                </label>
                <select
                  value={paymentFormData.month}
                  onChange={(e) => setPaymentFormData(prev => ({ ...prev, month: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={loading}
                >
                  <option value="">Select a month</option>
                  {generateMonthsArray().map(month => (
                    <option key={month.key} value={month.key}>
                      {month.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount ($) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={paymentFormData.amount}
                  onChange={(e) => setPaymentFormData(prev => ({ ...prev, amount: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="0.00"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Status
                </label>
                <select
                  value={paymentFormData.paymentStatus}
                  onChange={(e) => setPaymentFormData(prev => ({ ...prev, paymentStatus: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={loading}
                >
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={paymentFormData.invoiceStatus}
                    onChange={(e) => setPaymentFormData(prev => ({ ...prev, invoiceStatus: e.target.checked }))}
                    className="mr-2 rounded"
                    disabled={loading}
                  />
                  <span className="text-sm font-medium text-gray-700">Mark as invoiced</span>
                </label>
              </div>

              <div className="md:col-span-2 flex gap-4">
                <button
                  onClick={handleAddPayment}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? 'Adding...' : 'Add Payment'}
                </button>
                <button
                  onClick={resetPaymentForm}
                  className="bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300"
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add/Edit Referral Form */}
        {showAddForm && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingReferral ? 'Edit Referral' : 'Add New Referral'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Name *
                </label>
                <input
                  type="text"
                  value={formData.customerName}
                  onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter customer name"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Value ($) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.monthlyValue}
                  onChange={(e) => setFormData(prev => ({ ...prev, monthlyValue: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="0.00"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={loading}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date *
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={loading}
                />
              </div>

              <div className="md:col-span-2 flex gap-4">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : (editingReferral ? 'Update Referral' : 'Add Referral')}
                </button>
                <button
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300"
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content - Referrals List */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">All Referrals</h2>
            <button
              onClick={() => setShowAddPaymentForm(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              disabled={loading}
            >
              <PlusCircle size={16} />
              Add Payment
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Customer Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Monthly Value</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Start Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Annual Value</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {referrals.map((referral) => (
                  <tr key={referral.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{referral.customerName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900 font-semibold">${referral.monthlyValue.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                        referral.status === 'Active' ? 'bg-green-100 text-green-800' :
                        referral.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {referral.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        {new Date(referral.startDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900 font-semibold">${(referral.monthlyValue * 12).toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleEdit(referral)}
                          className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-200"
                          title="Edit"
                          disabled={loading}
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(referral.id)}
                          className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-200"
                          title="Delete"
                          disabled={loading}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {referrals.length === 0 && !loading && (
            <div className="text-center py-12">
              <Users size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">No referrals yet. Add your first referral to get started!</p>
           </div>
         )}
       </div>

       {/* Payment Tracking Section */}
       <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
         <div className="p-6 border-b border-gray-200">
           <div className="flex justify-between items-center">
             <h2 className="text-2xl font-bold text-gray-900">Payment Tracking</h2>
             <div className="flex items-center gap-4">
               <label className="text-sm font-medium text-gray-700">Month:</label>
               <select
                 value={selectedMonth}
                 onChange={(e) => setSelectedMonth(e.target.value)}
                 className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 disabled={loading}
               >
                 {generateMonthsArray().map(month => (
                   <option key={month.key} value={month.key}>
                     {month.name}
                   </option>
                 ))}
               </select>
             </div>
           </div>
         </div>
         
         <div className="overflow-x-auto">
           <table className="w-full">
             <thead className="bg-gray-50">
               <tr>
                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Customer</th>
                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Expected / Actual Payment</th>
                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Payment Status</th>
                 <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Invoice Status</th>
                 <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-200">
               {referrals
                 .filter(ref => {
                   const hasPaymentThisMonth = payments[ref.id]?.some(p => p.month === selectedMonth);
                   const isActiveAndValid = ref.status === 'Active' && isPaymentValidForMonth(ref, selectedMonth);
                   return isActiveAndValid || hasPaymentThisMonth;
                 })
                 .map((referral) => {
                   const paymentStatus = getPaymentStatus(referral.id, selectedMonth);
                   const invoiceStatus = getInvoiceStatus(referral.id, selectedMonth);
                   const actualPaymentAmount = getPaymentAmount(referral.id, selectedMonth);
                   return (
                     <tr key={referral.id} className="hover:bg-gray-50 transition-colors duration-150">
                       <td className="px-6 py-4">
                         <div className="font-medium text-gray-900">{referral.customerName}</div>
                         <div className="text-sm text-gray-500">
                           Started: {new Date(referral.startDate).toLocaleDateString()}
                           {referral.status === 'Inactive' && (
                             <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Inactive</span>
                           )}
                         </div>
                       </td>
                       <td className="px-6 py-4">
                         <div className="text-gray-900 font-semibold">
                           ${referral.monthlyValue.toLocaleString()}
                           {actualPaymentAmount !== null && (
                             <div className="text-sm text-gray-600 mt-1">
                               Actual: ${parseFloat(actualPaymentAmount).toLocaleString()}
                               {parseFloat(actualPaymentAmount) !== referral.monthlyValue && (
                                 <span className={`ml-2 text-xs px-2 py-1 rounded ${
                                   parseFloat(actualPaymentAmount) > referral.monthlyValue 
                                     ? 'bg-green-100 text-green-700' 
                                     : 'bg-orange-100 text-orange-700'
                                 }`}>
                                   {parseFloat(actualPaymentAmount) > referral.monthlyValue ? '+' : ''}
                                   ${(parseFloat(actualPaymentAmount) - referral.monthlyValue).toLocaleString()}
                                 </span>
                               )}
                             </div>
                           )}
                         </div>
                       </td>
                       <td className="px-6 py-4">
                         <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                           paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                           paymentStatus === 'overdue' ? 'bg-red-100 text-red-800' :
                           'bg-yellow-100 text-yellow-800'
                         }`}>
                           {paymentStatus === 'paid' ? 'Paid' : 
                            paymentStatus === 'overdue' ? 'Overdue' : 'Pending'}
                         </span>
                       </td>
                       <td className="px-6 py-4">
                         {paymentStatus === 'paid' ? (
                           <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                             invoiceStatus ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                           }`}>
                             {invoiceStatus ? 'Invoiced' : 'Not Invoiced'}
                           </span>
                         ) : (
                           <span className="text-gray-400 text-sm">-</span>
                         )}
                       </td>
                       <td className="px-6 py-4">
                         <div className="flex justify-center gap-2">
                           {/* Payment Status Buttons */}
                           <div className="flex gap-1 mr-3">
                             <button
                               onClick={() => handleUpdatePaymentStatus(referral.id, selectedMonth, 'paid')}
                               className={`p-2 rounded-lg transition-colors duration-200 ${
                                 paymentStatus === 'paid' 
                                   ? 'bg-green-200 text-green-700' 
                                   : 'bg-green-100 text-green-600 hover:bg-green-200'
                               }`}
                               title="Mark as Paid"
                               disabled={loading}
                             >
                               <Check size={16} />
                             </button>
                             <button
                               onClick={() => handleUpdatePaymentStatus(referral.id, selectedMonth, 'pending')}
                               className={`p-2 rounded-lg transition-colors duration-200 ${
                                 paymentStatus === 'pending' 
                                   ? 'bg-yellow-200 text-yellow-700' 
                                   : 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                               }`}
                               title="Mark as Pending"
                               disabled={loading}
                             >
                               <Clock size={16} />
                             </button>
                             <button
                               onClick={() => handleUpdatePaymentStatus(referral.id, selectedMonth, 'overdue')}
                               className={`p-2 rounded-lg transition-colors duration-200 ${
                                 paymentStatus === 'overdue' 
                                   ? 'bg-red-200 text-red-700' 
                                   : 'bg-red-100 text-red-600 hover:bg-red-200'
                               }`}
                               title="Mark as Overdue"
                               disabled={loading}
                             >
                               <X size={16} />
                             </button>
                           </div>
                           
                           {/* Invoice Status Button (only for paid payments) */}
                           {paymentStatus === 'paid' && (
                             <button
                               onClick={() => handleUpdateInvoiceStatus(referral.id, selectedMonth, !invoiceStatus)}
                               className={`p-2 rounded-lg transition-colors duration-200 mr-2 ${
                                 invoiceStatus 
                                   ? 'bg-purple-200 text-purple-700' 
                                   : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                               }`}
                               title={invoiceStatus ? "Mark as Not Invoiced" : "Mark as Invoiced"}
                               disabled={loading}
                             >
                               <FileText size={16} />
                             </button>
                           )}

                           {/* Delete Payment Button */}
                           <button
                             onClick={() => handleDeletePayment(referral.id, selectedMonth)}
                             className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-200"
                             title="Delete Payment Record"
                             disabled={loading}
                           >
                             <Trash size={16} />
                           </button>
                         </div>
                       </td>
                     </tr>
                   );
                 })}
             </tbody>
           </table>
         </div>

         {referrals.filter(ref => {
           const hasPaymentThisMonth = payments[ref.id]?.some(p => p.month === selectedMonth);
           const isActiveAndValid = ref.status === 'Active' && isPaymentValidForMonth(ref, selectedMonth);
           return isActiveAndValid || hasPaymentThisMonth;
         }).length === 0 && (
           <div className="text-center py-12">
             <DollarSign size={48} className="mx-auto text-gray-400 mb-4" />
             <p className="text-gray-500 text-lg">No payment records for this month.</p>
             <p className="text-gray-400 text-sm mt-2">Use "Add Payment" to create payment records for any customer.</p>
           </div>
         )}
       </div>
     </div>
   </div>
 );
};

export default ReferralManagementApp;