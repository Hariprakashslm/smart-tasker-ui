import React from 'react';
import './Alert.css';

export interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  description?: string;
  closable?: boolean;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  message,
  description,
  closable = false,
  onClose,
}) => {
  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-content">
        <strong>{message}</strong>
        {description && <div className="alert-description">{description}</div>}
      </div>
      {closable && (
        <button
          className="alert-close"
          onClick={onClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  );
};
