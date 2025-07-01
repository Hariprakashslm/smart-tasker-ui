// src/ui-stories/admin/AlertsPanel.stories.tsx
import React from 'react';
import { AlertsPanel, AlertItem } from 'admin/components/AlertsPanel';

export default {
  title: 'Packages/Admin/AlertsPanel',
  component: AlertsPanel,
};

const mockAlerts: AlertItem[] = [
  {
    id: '1',
    title: 'Database Connection Failed',
    message: 'Unable to connect to MongoDB. Please check credentials.',
    severity: 'error',
    onDismiss: () => alert('Dismissed DB error'),
  },
  {
    id: '2',
    title: 'High API Latency',
    message: 'API response time exceeded 1.2s threshold.',
    severity: 'warning',
    onView: () => alert('Viewing latency report'),
  },
  {
    id: '3',
    title: 'New Feature Deployed',
    message: '“Smart Sync” was deployed successfully.',
    severity: 'success',
  },
  {
    id: '4',
    title: 'Weekly Backup',
    message: 'Backup completed on schedule at 2:00 AM.',
    severity: 'info',
  },
];

export const Default = () => (
  <div style={{ padding: 24, maxWidth: 500 }}>
    <AlertsPanel alerts={mockAlerts} maxHeight="300px" />
  </div>
);

export const Empty = () => (
  <div style={{ padding: 24 }}>
    <AlertsPanel alerts={[]} />
  </div>
);
