// src/ui-stories/auth/ResetPassword.stories.tsx
import React from 'react';
import { ResetPassword } from 'auth/components/ResetPassword';

export default {
  title: 'Auth/ResetPassword',
  component: ResetPassword,
};

export const Default = () => (
  <ResetPassword
    token="demo-token"
    onSubmit={({ token, password }) => {
      console.log('Resetting with:', token, password);
      return Promise.resolve();
    }}
    onLoginRedirect={() => alert('Go to login')}
  />
);
