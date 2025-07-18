import React from 'react';
import {
  ResetPasswordScreen,
  ResetPasswordScreenProps,
} from '@screens/auth/ResetPasswordScreen';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ResetPasswordScreen> = {
  title: 'Screens/Auth/ResetPasswordScreen',
  component: ResetPasswordScreen,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof ResetPasswordScreen>;

const baseArgs: ResetPasswordScreenProps = {
  onReset: (password) => alert(`Password reset to: ${password}`),
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
    onReset: () => alert('Reset failed!'),
  },
};

export const Success: Story = {
  args: {
    ...baseArgs,
    onReset: () => alert('Password reset successful!'),
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
