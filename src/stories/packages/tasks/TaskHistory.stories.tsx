// src/ui-stories/tasks/TaskHistory.stories.tsx
import React from 'react';
import { TaskHistory, HistoryItem } from '@tasks/TaskHistory';

export default {
  title: 'Packages/Tasks/TaskHistory',
  component: TaskHistory,
};

const sampleHistory: HistoryItem[] = [
  {
    id: '1',
    user: 'Alice',
    action: 'created this task',
    timestamp: '2025-06-25T10:00:00Z',
  },
  {
    id: '2',
    user: 'Bob',
    action: 'updated the due date to 2025-07-01',
    timestamp: '2025-06-26T14:30:00Z',
  },
  {
    id: '3',
    user: 'Alice',
    action: 'changed assignee to Charlie',
    timestamp: '2025-06-27T09:15:00Z',
  },
];

export const Default = () => (
  <div style={{ maxWidth: 500 }}>
    <TaskHistory history={sampleHistory} />
  </div>
);

export const Empty = () => <TaskHistory history={[]} />;
