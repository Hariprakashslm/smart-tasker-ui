// src/ui-stories/tasks/ActivityItem.stories.tsx
import React from 'react';
import { ActivityItem } from '@activity/ActivityItem';

export default {
  title: 'Packages/Activity/ActivityItem',
  component: ActivityItem,
};

export const Default = () => (
  <ActivityItem
    user="Alice"
    action="created this task"
    timestamp="2025-06-26T14:00:00Z"
    avatarUrl="https://i.pravatar.cc/40?img=5"
  />
);

export const NoAvatar = () => (
  <ActivityItem
    user="System"
    action="moved task to Done"
    timestamp="2025-06-26T14:00:00Z"
  />
);
