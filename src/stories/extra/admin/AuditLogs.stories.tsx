// src/stories/admin/AuditLogs.stories.tsx
import React from 'react';
import { AuditLogs } from './AuditLogs';
import type { Meta, StoryObj } from '@storybook/react';
import './AuditLogs.css';

const meta: Meta<typeof AuditLogs> = {
  title: 'Admin/AuditLogs',
  component: AuditLogs,
};

export default meta;

type Story = StoryObj<typeof AuditLogs>;

export const Default: Story = {
  args: {
    logs: [
      {
        user: 'Hari Prakash',
        action: 'deleted project “Marketing Revamp”',
        timestamp: '2 mins ago',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
        details: 'Project ID: #5483',
      },
      {
        user: 'Admin Jane',
        action: 'updated user permissions',
        timestamp: '10 mins ago',
        avatarUrl: 'https://i.pravatar.cc/150?img=5',
        details: 'Granted admin access to John',
      },
      {
        user: 'System',
        action: 'backup completed',
        timestamp: '1 hour ago',
        details: 'Backup size: 340MB',
      },
    ],
  },
};
