import React from 'react';
import {
  ProfilePage,
  ProfilePageProps,
  UserProfile,
} from '@screens/admin/ProfilePage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfilePage> = {
  title: 'Screens/Admin/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof ProfilePage>;

const mockUser: UserProfile = {
  id: '1',
  name: 'Jane Doe',
  email: 'jane@example.com',
  avatarUrl: '',
  notifications: true,
  darkMode: false,
};

const baseArgs: ProfilePageProps = {
  user: mockUser,
  onUpdateProfile: (user) => alert(`Profile updated: ${JSON.stringify(user)}`),
  onToggleDarkMode: (enabled) => alert(`Dark mode: ${enabled}`),
  onUpdateNotifications: (enabled) => alert(`Notifications: ${enabled}`),
};

export const Default: Story = {
  args: {
    ...baseArgs,
  },
};

export const DarkMode: Story = {
  args: {
    ...baseArgs,
    user: { ...mockUser, darkMode: true },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
