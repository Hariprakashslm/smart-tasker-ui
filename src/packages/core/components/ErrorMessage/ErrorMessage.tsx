import React from 'react';
import './ErrorMessage.css';
import type { ErrorMessageProps } from './types';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  icon = <span className="error-icon">⚠️</span>,
  className = '',
}) => {
  if (!message) return null;

  return (
    <div className={`error-message ${className}`}>
      {icon}
      <span className="error-text">{message}</span>
    </div>
  );
};
