import React from 'react';
import { SignupScreen, SignupScreenProps } from '@screens/auth/SignupScreen';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SignupScreen> = {
  title: 'Screens/Auth/SignupScreen',
  component: SignupScreen,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof SignupScreen>;

const baseArgs: SignupScreenProps = {
  onSignup: (name, email, password) =>
    alert(`Signup: ${name} / ${email} / ${password}`),
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
    onSignup: () => alert('Signup failed!'),
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
