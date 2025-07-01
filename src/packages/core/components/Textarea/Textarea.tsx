import React from 'react';
import './TextArea.css';

export interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  error?: string;
  name?: string;
  id?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  rows = 5,
  cols,
  disabled = false,
  error,
  name,
  id,
}) => {
  return (
    <div className="textarea-wrapper">
      {label && (
        <label htmlFor={id} className="textarea-label">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        className={`textarea-input ${error ? 'textarea-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        cols={cols}
        disabled={disabled}
      />
      {error && <div className="textarea-error-message">{error}</div>}
    </div>
  );
};
