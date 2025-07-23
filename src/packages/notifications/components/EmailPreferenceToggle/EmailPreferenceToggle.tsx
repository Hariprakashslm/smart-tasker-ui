// src/ui/settings/EmailPreferenceToggle.tsx
import React from 'react';
import './EmailPreferenceToggle.css';
import { Checkbox } from '@core/Checkbox'; // or Switch if available
import type { EmailPreferenceToggleProps } from './types';

export const EmailPreferenceToggle: React.FC<EmailPreferenceToggleProps> = ({
  label,
  description,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <div className={`email-pref-toggle ${disabled ? 'disabled' : ''}`}>
      <div className="email-pref-text">
        <div className="email-pref-label">{label}</div>
        {description && <div className="email-pref-desc">{description}</div>}
      </div>
      <Checkbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
    </div>
  );
};
