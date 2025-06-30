// src/ui/auth/AuthLayout.tsx
import React from 'react';
import './AuthLayout.css';

export interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title = 'Welcome',
  subtitle = 'Please sign in or create an account',
  footer,
}) => {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <div className="auth-header">
          <h1>{title}</h1>
          {subtitle && <p className="auth-subtitle">{subtitle}</p>}
        </div>

        <div className="auth-content">{children}</div>

        {footer && <div className="auth-footer">{footer}</div>}
      </div>
    </div>
  );
};
