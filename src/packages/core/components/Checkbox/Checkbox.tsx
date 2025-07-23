import React from 'react';
import './Checkbox.css';
import type { CheckboxProps } from './types';

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
}) => {
  return (
    <label
      className={`checkbox-wrapper ${disabled ? 'checkbox-disabled' : ''}`}
    >
      <input
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="checkbox-custom" />
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};
