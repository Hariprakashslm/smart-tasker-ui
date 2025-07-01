// src/ui/auth/ResetPassword.tsx
import React, { useState } from 'react';
import './ResetPassword.css';
import { Input } from 'core/Input';
import { Button } from 'core/Button';
import { AuthLayout } from '../AuthLayout';

export interface ResetPasswordProps {
  token: string;
  onSubmit: (data: { token: string; password: string }) => Promise<void>;
  onLoginRedirect?: () => void;
}

export const ResetPassword: React.FC<ResetPasswordProps> = ({
  token,
  onSubmit,
  onLoginRedirect,
}) => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!password || !confirm) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await onSubmit({ token, password });
      setSuccess(true);
    } catch (err) {
      setError('Failed to reset password. Try again.');
    }
  };

  return (
    <AuthLayout title="Set New Password">
      {success ? (
        <div className="reset-success">
          ✅ Your password has been reset. You can now{' '}
          <Button variant="link" label="Login" onClick={onLoginRedirect} />
        </div>
      ) : (
        <form className="reset-password-form" onSubmit={handleSubmit}>
          <Input
            type="password"
            label="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          {error && <div className="reset-error">{error}</div>}

          <Button type="submit" label="Reset Password" />
        </form>
      )}
    </AuthLayout>
  );
};
