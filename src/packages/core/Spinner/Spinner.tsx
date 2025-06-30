import React from 'react';
import './Spinner.css';

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  color = '#333',
  label = 'Loading...',
}) => {
  return (
    <div className="spinner-container" role="status" aria-label={label}>
      <div
        className={`spinner spinner-${size}`}
        style={{ borderTopColor: color }}
      />
      {label && <span className="spinner-label">{label}</span>}
    </div>
  );
};
