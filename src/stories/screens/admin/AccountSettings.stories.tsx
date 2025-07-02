// src/stories/admin/AccountSettings.stories.tsx
import React from 'react';
import { AccountSettings } from '../../../packages/admin/components/AccountSettings/AccountSettings';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AccountSettings> = {
  title: 'Pages/Admin/AccountSettings',
  component: AccountSettings,
};

export default meta;

type Story = StoryObj<typeof AccountSettings>;

export const Default: Story = {
  args: {
    initialName: 'Hari Prakash',
    initialEmail: 'hari@smarttasker.com',
    onSave: (name, email, password) => {
      alert(
        `Saved:\nName: ${name}\nEmail: ${email}\nPassword: ${
          password || '[unchanged]'
        }`
      );
    },
    onDeactivate: () => {
      alert('Account deactivation triggered');
    },
  },
};
