// src/ui-stories/common/NotificationDropdown.stories.tsx
import React, { useState } from 'react';
import { NotificationDropdown } from 'notifications/NotificationDropdown';

export default {
  title: 'Packages/Notifications/NotificationDropdown',
  component: NotificationDropdown,
};

const mockNotifications = [
  {
    id: '1',
    title: 'New comment',
    message: 'John replied to your task.',
    time: '2m ago',
    icon: '💬',
    read: false,
  },
  {
    id: '2',
    title: 'Deploy completed',
    message: 'Version 1.2.3 is now live.',
    time: '1h ago',
    icon: '✅',
    read: true,
  },
  {
    id: '3',
    title: 'Reminder',
    message: 'Finish your review.',
    time: '1d ago',
    icon: '⏰',
    read: false,
  },
];

export const Default = () => (
  <div style={{ position: 'relative', padding: 24, height: 400 }}>
    <NotificationDropdown
      notifications={mockNotifications}
      onMarkAllRead={() => alert('Marked all as read')}
      onViewAll={() => alert('Navigate to full page')}
    />
  </div>
);

export const Empty = () => (
  <div style={{ position: 'relative', padding: 24 }}>
    <NotificationDropdown notifications={[]} />
  </div>
);
