import React from 'react';
import './ErrorMessage.css';

export interface ErrorMessageProps {
  message: string;
  icon?: React.ReactNode;
  className?: string;
}

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
