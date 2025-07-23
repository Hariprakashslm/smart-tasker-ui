import React from 'react';
import './Switch.css';
import type { SwitchProps } from './types';

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  id,
}) => {
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label
      htmlFor={switchId}
      className={`switch-wrapper ${disabled ? 'disabled' : ''}`}
    >
      {label && <span className="switch-label">{label}</span>}
      <input
        id={switchId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="switch-input"
      />
      <span className="switch-slider" />
    </label>
  );
};
