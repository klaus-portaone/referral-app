import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="animate-spin mx-auto mb-4 w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Referrals</h2>
        <p className="text-gray-600">Connecting to Firebase...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;