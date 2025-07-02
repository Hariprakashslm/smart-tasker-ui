// src/ui-stories/packages/dashboard/TaskCompletionChart.stories.tsx
import React from 'react';
import { TaskCompletionChart } from '@dashboard/TaskCompletionChart';

export default {
  title: 'Packages/Dashboard/TaskCompletionChart',
  component: TaskCompletionChart,
};

export const Default = () => (
  <div style={{ width: 240 }}>
    <TaskCompletionChart completed={45} total={60} />
  </div>
);

export const Half = () => <TaskCompletionChart completed={5} total={10} />;

export const Empty = () => <TaskCompletionChart completed={0} total={10} />;

export const Full = () => <TaskCompletionChart completed={10} total={10} />;
