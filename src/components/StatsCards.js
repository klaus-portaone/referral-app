import React from 'react';
import { DollarSign, Users, TrendingUp, Calendar, Check, Clock } from 'lucide-react';

const StatsCards = ({ totalMonthlyValue, activeReferrals, paymentStats }) => {
  return (
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
  );
};

export default StatsCards;