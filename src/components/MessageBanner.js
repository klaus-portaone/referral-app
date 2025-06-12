import React from 'react';
import { Check, X } from 'lucide-react';

const MessageBanner = ({ message, type, onClose }) => {
  if (!message) return null;

  const isSuccess = type === 'success';
  const bgColor = isSuccess ? 'bg-green-100' : 'bg-red-100';
  const borderColor = isSuccess ? 'border-green-400' : 'border-red-400';
  const textColor = isSuccess ? 'text-green-700' : 'text-red-700';
  const hoverColor = isSuccess ? 'hover:text-green-900' : 'hover:text-red-900';
  const Icon = isSuccess ? Check : X;

  return (
    <div className={`${bgColor} border ${borderColor} ${textColor} px-6 py-4 rounded-xl mb-6 flex items-center gap-2`}>
      <Icon size={20} />
      {message}
      <button 
        onClick={onClose}
        className={`ml-auto ${textColor} ${hoverColor}`}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default MessageBanner;