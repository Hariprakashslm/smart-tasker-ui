import React from 'react';
import './RadioButton.css';
import type { RadioButtonProps } from './types';

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  disabled = false,
  label,
}) => {
  return (
    <div className="radio-group">
      {label && <div className="radio-label-group">{label}</div>}
      {options.map((option) => (
        <label
          key={option.value}
          className={`radio-label ${disabled ? 'disabled' : ''}`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
          />
          <span className="radio-custom" />
          {option.label}
        </label>
      ))}
    </div>
  );
};
