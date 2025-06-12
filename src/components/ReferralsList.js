import React from 'react';
import { PlusCircle, Edit3, Trash2, Calendar, Users } from 'lucide-react';

const ReferralsList = ({ 
  referrals, 
  handleEdit, 
  handleDelete, 
  setShowAddPaymentForm, 
  loading 
}) => {
  return (
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
  );
};

export default ReferralsList;