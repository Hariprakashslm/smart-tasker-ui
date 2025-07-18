import React, { useState } from 'react';
import './ResetPasswordScreen.css';
import { ResetPasswordScreenProps } from './types';

export const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({ onReset, onNavigate }) => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !confirm) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    setError(null);
    onReset?.(password);
    setSuccess(true);
  };
  return (
    <div className="reset-password-screen">
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        {success ? (
          <div className="reset-password-success">Your password has been reset. You can now log in.</div>
        ) : (
          <>
            {error && <div className="reset-password-error">{error}</div>}
            <label htmlFor="reset-password">New Password</label>
            <input
              id="reset-password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
            <label htmlFor="reset-confirm">Confirm Password</label>
            <input
              id="reset-confirm"
              type="password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              autoComplete="new-password"
              required
            />
            <button type="submit" className="reset-password-submit">Reset Password</button>
          </>
        )}
        <div className="reset-password-links">
          <button type="button" className="link" onClick={() => onNavigate?.('login')}>Back to Login</button>
        </div>
      </form>
    </div>
  );
}; 