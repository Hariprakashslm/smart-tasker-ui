// src/stories/admin/NotificationSettings.stories.tsx
import React, { useState } from 'react';
import {
  NotificationSettings,
  NotificationOption,
} from './NotificationSettings';
import type { Meta, StoryObj } from '@storybook/react';
import './NotificationSettings.css';

const meta: Meta<typeof NotificationSettings> = {
  title: 'Admin/NotificationSettings',
  component: NotificationSettings,
};

export default meta;

type Story = StoryObj<typeof NotificationSettings>;

export const Default: Story = {
  render: () => {
    const [options, setOptions] = useState<NotificationOption[]>([
      {
        label: 'Task Updates',
        description: 'Receive a notification when a task is updated.',
        enabled: true,
        onToggle: (val) => update(0, val),
      },
      {
        label: 'Mentions',
        description: 'Get notified when someone mentions you in a comment.',
        enabled: false,
        onToggle: (val) => update(1, val),
      },
      {
        label: 'Project Changes',
        description: 'Be informed of changes to projects you are part of.',
        enabled: true,
        onToggle: (val) => update(2, val),
      },
      {
        label: 'Deadline Reminders',
        description: 'Receive reminders before upcoming deadlines.',
        enabled: true,
        onToggle: (val) => update(3, val),
      },
    ]);

    function update(index: number, value: boolean) {
      const copy = [...options];
      copy[index] = { ...copy[index], enabled: value };
      setOptions(copy);
    }

    return <NotificationSettings options={options} />;
  },
};
