// src/ui-stories/auth/AuthLayout.stories.tsx
import React from 'react';
import { AuthLayout } from 'auth/AuthLayout';
import { LoginForm } from 'auth/LoginForm';
import { SignupForm } from 'auth/SignupForm';

export default {
  title: 'Auth/AuthLayout',
  component: AuthLayout,
};

export const WithLoginForm = () => (
  <AuthLayout
    title="Sign In"
    subtitle="Welcome back!"
    footer={
      <p>
        New here? <a href="#">Create an account</a>
      </p>
    }
  >
    <LoginForm
      onSubmit={(data) => alert(JSON.stringify(data))}
      showOAuth={false}
    />
  </AuthLayout>
);

export const WithSignUpForm = () => (
  <AuthLayout
    title="Sign In"
    subtitle="Welcome back!"
    footer={
      <p>
        New here? <a href="#">Create an account</a>
      </p>
    }
  >
    <SignupForm
      onSubmit={(data) => alert(JSON.stringify(data))}
      showOAuth={false}
    />
  </AuthLayout>
);
