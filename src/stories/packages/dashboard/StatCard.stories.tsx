// src/ui-stories/packages/dashboard/StatCard.stories.tsx
import React from 'react';
import { StatCard } from '@dashboard/StatCard';

export default {
  title: 'Packages/Dashboard/StatCard',
  component: StatCard,
};

export const Default = () => (
  <StatCard title="Open Tasks" value={12} description="Due today" />
);

export const Success = () => (
  <StatCard
    title="Completed"
    value="32"
    description="+18% this week"
    variant="success"
    icon="✅"
  />
);

export const Warning = () => (
  <StatCard
    title="Overdue Tasks"
    value="4"
    description="High priority"
    variant="warning"
    icon="⚠️"
  />
);

export const Error = () => (
  <StatCard title="Sync Failed" value="2 Errors" variant="error" icon="❌" />
);
