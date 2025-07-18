import React, { useState } from 'react';
import './SignupScreen.css';
import { SignupScreenProps } from './types';

export const SignupScreen: React.FC<SignupScreenProps> = ({ onSignup, onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError(null);
    onSignup?.(name, email, password);
  };
  return (
    <div className="signup-screen">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <div className="signup-error">{error}</div>}
        <label htmlFor="signup-name">Name</label>
        <input
          id="signup-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="name"
          required
        />
        <label htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
          required
        />
        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        <button type="submit" className="signup-submit">Sign Up</button>
        <div className="signup-links">
          <button type="button" className="link" onClick={() => onNavigate?.('login')}>Already have an account?</button>
          <button type="button" className="link" onClick={() => onNavigate?.('forgot')}>Forgot Password?</button>
        </div>
      </form>
    </div>
  );
}; 