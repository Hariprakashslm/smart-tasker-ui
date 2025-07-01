// src/ui-stories/tasks/ActivityTimeline.stories.tsx
import React from 'react';
import { ActivityTimeline } from 'activity/ActivityTimeline';

export default {
  title: 'Packages/Activity/ActivityTimeline',
  component: ActivityTimeline,
};

const sampleHistory = [
  {
    user: 'Alice',
    action: 'created this task',
    timestamp: '2025-06-25T10:00:00Z',
    avatarUrl: 'https://i.pravatar.cc/40?img=1',
  },
  {
    user: 'Bob',
    action: 'updated the due date to July 1',
    timestamp: '2025-06-26T14:00:00Z',
    avatarUrl: 'https://i.pravatar.cc/40?img=2',
  },
  {
    user: 'Charlie',
    action: 'marked task as complete',
    timestamp: '2025-06-27T11:00:00Z',
    avatarUrl: 'https://i.pravatar.cc/40?img=3',
  },
];

export const Default = () => (
  <div style={{ maxWidth: 500 }}>
    <ActivityTimeline history={sampleHistory} />
  </div>
);

export const Empty = () => <ActivityTimeline history={[]} />;
