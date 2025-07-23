// src/ui/auth/LoginForm.tsx
import React, { useState } from 'react';
import './LoginForm.css';
import { Input } from '@core/Input';
import { Button } from '@core/Button';
import { OAuthButtons } from '@auth/OAuthButtons';
import { Divider } from '@core/Divider';
import { LoginFormProps } from './types';

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onCancel,
  showOAuth = true,
  oauthProviders = [],
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onSubmit({ email, password });
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-title">Sign In</h2>

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="login-actions">
        {onCancel && <Button type="button" onClick={onCancel} label="Cancel" />}
        <Button type="submit" label="Sign In" variant="outlined" />
      </div>

      {showOAuth && oauthProviders.length > 0 && (
        <div className="login-oauth">
          <Divider text="OR" textAlign="center" />
          <OAuthButtons providers={oauthProviders} />
        </div>
      )}
    </form>
  );
};
