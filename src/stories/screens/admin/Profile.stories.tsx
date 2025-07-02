// src/stories/admin/Profile.stories.tsx
import React from 'react';
import { Profile } from '../../../packages/admin/components/Profile/Profile';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Profile> = {
  title: 'Pages/Admin/Profile',
  component: Profile,
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    name: 'Hari Prakash',
    email: 'hari@smarttasker.com',
    role: 'Admin',
    bio: 'Tech enthusiast, full-stack developer, and product visionary behind Smart Tasker.',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    editable: true,
    onEdit: () => alert('Edit Profile Clicked'),
  },
};
