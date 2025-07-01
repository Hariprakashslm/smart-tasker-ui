// src/ui/auth/SignupForm.tsx
import React, { useState } from 'react';
import './SignupForm.css';
import { Input } from 'core/components/Input';
import { Button } from 'core/components/Button';
import { OAuthButtons, OAuthProvider } from 'auth/components/OAuthButtons';
import { Divider } from 'core/components/Divider';

export interface SignupFormProps {
  onSubmit: (data: { name: string; email: string; password: string }) => void;
  onCancel?: () => void;
  showOAuth?: boolean;
  oauthProviders?: OAuthProvider[];
}

export const SignupForm: React.FC<SignupFormProps> = ({
  onSubmit,
  onCancel,
  showOAuth = true,
  oauthProviders = [],
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      onSubmit({ name, email, password });
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="signup-title">Create Account</h2>

      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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

      <div className="signup-actions">
        {onCancel && (
          <Button type="button" onClick={onCancel} label="Cancel"></Button>
        )}
        <Button type="submit" label="Sign Up"></Button>
      </div>

      {showOAuth && oauthProviders.length > 0 && (
        <div className="signup-oauth">
          <Divider text="OR" textAlign="center"></Divider>
          <div className="signup-divider"></div>
          <OAuthButtons providers={oauthProviders} />
        </div>
      )}
    </form>
  );
};
