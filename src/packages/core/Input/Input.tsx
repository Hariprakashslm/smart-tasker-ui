import React from 'react';
import './Input.css';

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = '',
  type = 'text',
  value,
  onChange,
  disabled = false,
  required = false,
  error,
}) => {
  return (
    <div className={`input-wrapper ${disabled ? 'input-disabled' : ''}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`input-field ${error ? 'input-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <div className="input-error-text">{error}</div>}
    </div>
  );
};
