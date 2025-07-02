// src/ui-stories/admin/ErrorRateGraph.stories.tsx
import React from 'react';
import { ErrorRateGraph, ErrorRatePoint } from '@admin/ErrorRateGraph';

export default {
  title: 'Packages/Admin/ErrorRateGraph',
  component: ErrorRateGraph,
};

const mockData: ErrorRatePoint[] = [
  { time: '09:00', count: 0 },
  { time: '10:00', count: 2 },
  { time: '11:00', count: 4 },
  { time: '12:00', count: 1 },
  { time: '13:00', count: 7 },
  { time: '14:00', count: 5 },
  { time: '15:00', count: 2 },
  { time: '16:00', count: 0 },
  { time: '17:00', count: 3 },
];

export const Default = () => (
  <div style={{ padding: 24, maxWidth: 800 }}>
    <h3>Error Rate (Past 8 Hours)</h3>
    <ErrorRateGraph data={mockData} maxHeight="300px" />
  </div>
);

export const Empty = () => (
  <div style={{ padding: 24 }}>
    <ErrorRateGraph data={[]} />
  </div>
);
