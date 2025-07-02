// src/ui/auth/ForgotPassword.tsx
import React, { useState } from 'react';
import { Input } from '@core/Input';
import { Button } from '@core/Button';
import { AuthLayout } from '../AuthLayout';
import './ForgotPassword.css';

export interface ForgotPasswordProps {
  onSubmit: (email: string) => Promise<void>;
  onBackToLogin?: () => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  onSubmit,
  onBackToLogin,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    try {
      await onSubmit(email);
      setSubmitted(true);
    } catch (err) {
      setError('Failed to send reset email');
    }
  };

  return (
    <AuthLayout title="Reset Password">
      {submitted ? (
        <div className="reset-success">
          ✅ If an account with <strong>{email}</strong> exists, a reset link
          has been sent.
        </div>
      ) : (
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <Input
            type="email"
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={error}
          />

          <Button label="Send Reset Link" type="submit" />

          {onBackToLogin && (
            <div className="back-to-login">
              <Button
                variant="link"
                type="button"
                onClick={onBackToLogin}
                label="Back to Login"
              />
            </div>
          )}
        </form>
      )}
    </AuthLayout>
  );
};
