// src/ui/core/Input.tsx
import React from 'react';
import './Input.css';
import type { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = '',
  type = 'text',
  value,
  onChange,
  disabled = false,
  required = false,
  error,
  icon,
  suffix,
}) => {
  return (
    <div className={`input-wrapper ${disabled ? 'input-disabled' : ''}`}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}

      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          className={`input-field ${icon ? 'has-icon' : ''} ${
            suffix ? 'has-suffix' : ''
          } ${error ? 'input-error' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {suffix && <span className="input-suffix">{suffix}</span>}
      </div>

      {error && <div className="input-error-text">{error}</div>}
    </div>
  );
};
