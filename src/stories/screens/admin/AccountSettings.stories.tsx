// src/stories/admin/AccountSettings.stories.tsx
import React from 'react';
import { AccountSettings } from '@screens/admin/AccountSettings';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof AccountSettings> = {
  title: 'Pages/Admin/AccountSettings',
  component: AccountSettings,
  args: { onSave: fn(), onDeactivate: fn() },
};

export default meta;

type Story = StoryObj<typeof AccountSettings>;

export const Default: Story = {
  args: {
    initialName: 'John Doe',
    initialEmail: 'johndoe@smarttasker.com',
  },
};
