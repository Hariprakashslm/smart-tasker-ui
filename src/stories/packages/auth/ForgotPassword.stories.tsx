// src/ui-stories/auth/ForgotPassword.stories.tsx
import React from 'react';
import { ForgotPassword } from 'auth/ForgotPassword';

export default {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
};

export const Default = () => (
  <ForgotPassword
    onSubmit={(email) => {
      console.log('Reset request for:', email);
      return Promise.resolve();
    }}
    onBackToLogin={() => alert('Navigate back')}
  />
);
