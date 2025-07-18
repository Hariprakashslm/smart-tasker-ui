import React from 'react';
import {
  ForgotPasswordScreen,
  ForgotPasswordScreenProps,
} from '@screens/auth/ForgotPasswordScreen';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ForgotPasswordScreen> = {
  title: 'Screens/Auth/ForgotPasswordScreen',
  component: ForgotPasswordScreen,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof ForgotPasswordScreen>;

const baseArgs: ForgotPasswordScreenProps = {
  onSendReset: (email) => alert(`Reset link sent to: ${email}`),
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
    onSendReset: () => alert('Reset failed!'),
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
