// src/ui-stories/common/NotificationItem.stories.tsx
import React from 'react';
import { NotificationItem } from 'notifications/components/NotificationItem';

export default {
  title: 'Packages/Notifications/NotificationItem',
  component: NotificationItem,
};

export const Unread = () => (
  <NotificationItem
    id="1"
    title="New comment"
    message="You have a new message from John."
    time="2m ago"
    icon="💬"
    read={false}
    onClick={() => alert('Clicked!')}
  />
);

export const Read = () => (
  <NotificationItem
    id="2"
    title="System Update"
    message="New version deployed successfully."
    time="10m ago"
    icon="✅"
    read={true}
  />
);

export const WithoutIcon = () => (
  <NotificationItem
    id="3"
    title="Task assigned"
    message="You’ve been assigned to ‘UI Redesign’."
    time="Just now"
  />
);
