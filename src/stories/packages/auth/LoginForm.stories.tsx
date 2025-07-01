// src/ui-stories/auth/LoginForm.stories.tsx
import React from 'react';
import { LoginForm } from 'auth/LoginForm';
import type { OAuthProvider } from 'auth/OAuthButtons';

export default {
  title: 'Packages/Auth/LoginForm',
  component: LoginForm,
};

const oauthProviders: OAuthProvider[] = [
  {
    id: 'google',
    label: 'Sign in with Google',
    icon: <span>🔵</span>,
    onClick: () => alert('Google login clicked'),
  },
  {
    id: 'github',
    label: 'Sign in with GitHub',
    icon: <span>⚫</span>,
    onClick: () => alert('GitHub login clicked'),
  },
];

export const Default = () => (
  <LoginForm
    onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    onCancel={() => alert('Login cancelled')}
    oauthProviders={oauthProviders}
  />
);

export const NoOAuth = () => (
  <LoginForm
    onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    showOAuth={false}
  />
);
