// src/stories/admin/AdminDashboard.stories.tsx
import React from 'react';
import { AdminDashboard } from './AdminDashboard';
import type { Meta, StoryObj } from '@storybook/react';
import './AdminDashboard.css';

const meta: Meta<typeof AdminDashboard> = {
  title: 'Admin/AdminDashboard',
  component: AdminDashboard,
};

export default meta;

type Story = StoryObj<typeof AdminDashboard>;

export const Default: Story = {
  args: {
    stats: [
      { label: 'Total Projects', count: 12, color: 'blue' },
      { label: 'Pending Tasks', count: 34, color: 'orange' },
      { label: 'Completed Tasks', count: 89, color: 'green' },
      { label: 'Team Members', count: 7, color: 'purple' },
    ],
    activities: [
      {
        user: 'Hari Prakash',
        action: 'created a new task',
        timestamp: '2 mins ago',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
      },
      {
        user: 'Jane Doe',
        action: 'updated project deadline',
        timestamp: '10 mins ago',
        avatarUrl: 'https://i.pravatar.cc/150?img=2',
      },
    ],
  },
};
