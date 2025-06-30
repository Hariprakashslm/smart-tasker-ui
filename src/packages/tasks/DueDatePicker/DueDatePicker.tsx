// src/ui/tasks/DueDateInput.tsx
import React from 'react';
import './DueDatePicker.css';

export interface DueDateInputProps {
  label?: string;
  value: string;
  onChange: (newDate: string) => void;
  min?: string;
  max?: string;
  disabled?: boolean;
  required?: boolean;
}

export const DueDatePicker: React.FC<DueDateInputProps> = ({
  label = 'Due Date',
  value,
  onChange,
  min,
  max,
  disabled = false,
  required = false,
}) => {
  return (
    <div className="due-date-input-wrapper">
      <label className="due-date-label">{label}</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="due-date-input"
        min={min}
        max={max}
        disabled={disabled}
        required={required}
      />
    </div>
  );
};
