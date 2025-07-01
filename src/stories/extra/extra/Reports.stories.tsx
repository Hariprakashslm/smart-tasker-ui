// src/stories/reports/Reports.stories.tsx
import React from 'react';
import { Reports } from './Reports';
import type { Meta, StoryObj } from '@storybook/react';
import './Reports.css';

const meta: Meta<typeof Reports> = {
  title: 'Reports/Reports',
  component: Reports,
};

export default meta;

type Story = StoryObj<typeof Reports>;

export const Default: Story = {
  args: {
    cards: [
      {
        title: 'Completed Tasks',
        value: '128',
        description: 'Tasks completed this month',
        icon: '✅',
      },
      {
        title: 'Active Projects',
        value: '12',
        description: 'Ongoing across teams',
        icon: '📁',
      },
      {
        title: 'New Users',
        value: '34',
        description: 'Joined in last 30 days',
        icon: '👤',
      },
      {
        title: 'System Logs',
        value: '8,432',
        description: 'Logged events this week',
        icon: '📋',
      },
    ],
  },
};
