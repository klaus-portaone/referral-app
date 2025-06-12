import React from 'react';
import { DollarSign, Check, Clock, X, FileText, Trash } from 'lucide-react';

const PaymentTracking = ({ 
  referrals,
  payments,
  selectedMonth,
  setSelectedMonth,
  generateMonthsArray,
  getPaymentStatus,
  getInvoiceStatus,
  getPaymentAmount,
  isPaymentValidForMonth,
  handleUpdatePaymentStatus,
  handleUpdateInvoiceStatus,
  handleDeletePayment,
  loading
}) => {
  const filteredReferrals = referrals.filter(ref => {
    const hasPaymentThisMonth = payments[ref.id]?.some(p => p.month === selectedMonth);
    const isActiveAndValid = ref.status === 'Active' && isPaymentValidForMonth(ref, selectedMonth);
    return isActiveAndValid || hasPaymentThisMonth;
  });

  return (
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
            {filteredReferrals.map((referral) => {
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

      {filteredReferrals.length === 0 && (
        <div className="text-center py-12">
          <DollarSign size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500 text-lg">No payment records for this month.</p>
          <p className="text-gray-400 text-sm mt-2">Use "Add Payment" to create payment records for any customer.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentTracking;