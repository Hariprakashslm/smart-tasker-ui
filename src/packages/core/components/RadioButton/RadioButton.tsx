import React from 'react';
import './RadioButton.css';

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioButtonProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  label?: string;
}

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
