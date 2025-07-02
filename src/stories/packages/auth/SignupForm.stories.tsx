// src/ui-stories/auth/SignupForm.stories.tsx
import React from 'react';
import { SignupForm } from '@auth/SignupForm';
import { OAuthProvider } from '@auth/OAuthButtons';

export default {
  title: 'Packages/Auth/SignupForm',
  component: SignupForm,
};

const oauthProviders: OAuthProvider[] = [
  {
    id: 'google',
    label: 'Sign up with Google',
    icon: <span>🔵</span>,
    onClick: () => alert('Google signup clicked'),
  },
  {
    id: 'github',
    label: 'Sign up with GitHub',
    icon: <span>⚫</span>,
    onClick: () => alert('GitHub signup clicked'),
  },
];

export const Default = () => (
  <SignupForm
    onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    onCancel={() => alert('Cancelled')}
    oauthProviders={oauthProviders}
  />
);

export const NoOAuth = () => (
  <SignupForm
    onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
    showOAuth={false}
  />
);
