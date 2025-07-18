import React, { useState } from 'react';
import './LoginScreen.css';
import { LoginScreenProps } from './types';

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError(null);
    onLogin?.(email, password);
  };
  return (
    <div className="login-screen">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="login-error">{error}</div>}
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
          required
        />
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        <button type="submit" className="login-submit">Login</button>
        <div className="login-links">
          <button type="button" className="link" onClick={() => onNavigate?.('forgot')}>Forgot Password?</button>
          <button type="button" className="link" onClick={() => onNavigate?.('signup')}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}; 