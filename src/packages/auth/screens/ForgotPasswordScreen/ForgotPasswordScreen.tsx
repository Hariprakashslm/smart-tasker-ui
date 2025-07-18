import React, { useState } from 'react';
import './ForgotPasswordScreen.css';
import { ForgotPasswordScreenProps } from './types';

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ onSendReset, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    setError(null);
    onSendReset?.(email);
    setSent(true);
  };
  return (
    <div className="forgot-password-screen">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        {sent ? (
          <div className="forgot-password-success">Check your email for a reset link.</div>
        ) : (
          <>
            {error && <div className="forgot-password-error">{error}</div>}
            <label htmlFor="forgot-email">Email</label>
            <input
              id="forgot-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
            <button type="submit" className="forgot-password-submit">Send Reset Link</button>
          </>
        )}
        <div className="forgot-password-links">
          <button type="button" className="link" onClick={() => onNavigate?.('login')}>Back to Login</button>
        </div>
      </form>
    </div>
  );
}; 