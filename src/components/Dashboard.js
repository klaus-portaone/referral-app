import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Auth from './Auth';
import ReferralManagementApp from './ReferralManagementApp';
import { LogOut } from 'lucide-react';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  if (!currentUser) {
    return <Auth />;
  }

  return (
    <div>
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span className="text-gray-600">Welcome,</span>
              <span className="font-medium text-gray-900">{currentUser.email}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-8">
        <ReferralManagementApp />
      </div>
    </div>
  );
};

export default Dashboard;