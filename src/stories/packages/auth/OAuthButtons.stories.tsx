// src/ui-stories/auth/OAuthButtons.stories.tsx
import React from 'react';
import { OAuthButtons } from 'auth/OAuthButtons';

export default {
  title: 'Auth/OAuthButtons',
  component: OAuthButtons,
};

const google = {
  id: 'google' as 'google' | 'github' | 'facebook',
  label: 'Sign in with Google',
  icon: <span>🔵</span>,
  onClick: () => alert('Google clicked'),
};

const github = {
  id: 'github' as 'google' | 'github' | 'facebook',
  label: 'Sign in with GitHub',
  icon: <span>⚫</span>,
  onClick: () => alert('GitHub clicked'),
};

const facebook = {
  id: 'facebook' as 'google' | 'github' | 'facebook',
  label: 'Sign in with Facebook',
  icon: <span>🔷</span>,
  onClick: () => alert('Facebook clicked'),
};

export const Default = () => (
  <OAuthButtons providers={[google, github, facebook]} />
);
