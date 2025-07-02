// src/ui-stories/packages/dashboard/OverviewGraph.stories.tsx
import React from 'react';
import { OverviewGraph } from '@dashboard/OverviewGraph';

export default {
  title: 'Packages/Dashboard/OverviewGraph',
  component: OverviewGraph,
};

const mockData = [
  { label: 'Mon', value: 5 },
  { label: 'Tue', value: 8 },
  { label: 'Wed', value: 4 },
  { label: 'Thu', value: 6 },
  { label: 'Fri', value: 9 },
  { label: 'Sat', value: 3 },
  { label: 'Sun', value: 2 },
];

export const Line = () => (
  <div style={{ padding: 24, maxWidth: 600 }}>
    <OverviewGraph title="Weekly Activity" data={mockData} type="line" />
  </div>
);

export const Bar = () => (
  <div style={{ padding: 24, maxWidth: 600 }}>
    <OverviewGraph title="Task Completion" data={mockData} type="bar" />
  </div>
);
