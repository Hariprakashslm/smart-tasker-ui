// src/ui/auth/OAuthButtons.tsx
import React from 'react';
import './OAuthButtons.css';
import { OAuthButtonsProps } from './types';

export const OAuthButtons: React.FC<OAuthButtonsProps> = ({ providers }) => {
  return (
    <div className="oauth-buttons">
      {providers.map((provider) => (
        <button
          key={provider.id}
          className={`oauth-button oauth-${provider.id}`}
          onClick={provider.onClick}
        >
          {provider.icon && <span className="oauth-icon">{provider.icon}</span>}
          {provider.label}
        </button>
      ))}
    </div>
  );
};
