import React from 'react';
import type { AlertProps } from './types';

const ALERT_TYPE_MAP = {
  success: 'bg-green-100 border-green-400 text-green-800',
  error: 'bg-red-100 border-red-400 text-red-800',
  warning: 'bg-yellow-100 border-yellow-400 text-yellow-800',
  info: 'bg-blue-100 border-blue-400 text-blue-800',
};

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  message,
  description,
  closable = false,
  onClose,
}) => {
  const typeClass = ALERT_TYPE_MAP[type] || ALERT_TYPE_MAP.info;
  return (
    <div className={`border-l-4 p-4 flex items-start gap-3 rounded-md ${typeClass}`}> 
      <div className="flex-1">
        <strong className="block font-semibold">{message}</strong>
        {description && <div className="mt-1 text-sm">{description}</div>}
      </div>
      {closable && (
        <button
          className="ml-2 text-xl font-bold leading-none text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
};
