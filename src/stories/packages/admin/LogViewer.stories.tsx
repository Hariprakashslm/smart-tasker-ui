// src/ui-stories/admin/LogViewer.stories.tsx
import React from 'react';
import { LogViewer, LogEntry } from '@admin/LogViewer';

export default {
  title: 'Packages/Admin/LogViewer',
  component: LogViewer,
};

const mockLogs: LogEntry[] = [
  {
    id: '1',
    timestamp: new Date(Date.now() - 60000).toISOString(),
    level: 'info',
    message: 'System initialized.',
  },
  {
    id: '2',
    timestamp: new Date(Date.now() - 30000).toISOString(),
    level: 'success',
    message: 'User "Alice" created a new task.',
  },
  {
    id: '3',
    timestamp: new Date(Date.now() - 15000).toISOString(),
    level: 'warning',
    message: 'API response delay (320ms) detected.',
  },
  {
    id: '4',
    timestamp: new Date().toISOString(),
    level: 'error',
    message: 'Failed to fetch project list (500 Internal Server Error).',
  },
];

export const Default = () => (
  <div style={{ padding: 24 }}>
    <LogViewer logs={mockLogs} maxHeight="300px" />
  </div>
);

export const EmptyLogs = () => (
  <div style={{ padding: 24 }}>
    <LogViewer logs={[]} />
  </div>
);
