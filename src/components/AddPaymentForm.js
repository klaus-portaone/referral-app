import React from 'react';
import { DollarSign } from 'lucide-react';

const AddPaymentForm = ({ 
  showAddPaymentForm,
  paymentFormData,
  setPaymentFormData,
  handleAddPayment,
  resetPaymentForm,
  referrals,
  generateMonthsArray,
  loading
}) => {
  if (!showAddPaymentForm) return null;

  return (
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
  );
};

export default AddPaymentForm;