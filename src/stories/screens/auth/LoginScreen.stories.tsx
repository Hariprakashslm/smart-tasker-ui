import React from 'react';
import { LoginScreen, LoginScreenProps } from '@screens/auth/LoginScreen';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginScreen> = {
  title: 'Screens/Auth/LoginScreen',
  component: LoginScreen,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof LoginScreen>;

const baseArgs: LoginScreenProps = {
  onLogin: (email, password) => alert(`Login: ${email} / ${password}`),
  onNavigate: (screen) => alert(`Navigate to: ${screen}`),
};

export const Default: Story = {
  args: {
    ...baseArgs,
  },
};

export const WithError: Story = {
  args: {
    ...baseArgs,
    onLogin: () => alert('Login failed!'),
  },
};

export const DarkMode: Story = {
  args: {
    ...baseArgs,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
