// src/ui-stories/packages/dashboard/StorageUsageCard.stories.tsx
import React from 'react';
import { StorageUsageCard } from 'dashboard/StorageUsageCard';

export default {
  title: 'Packages/Dashboard/StorageUsageCard',
  component: StorageUsageCard,
};

export const Default = () => (
  <div style={{ maxWidth: 400, padding: 24 }}>
    <StorageUsageCard used={4.2} total={10} />
  </div>
);

export const Warning = () => <StorageUsageCard used={8.2} total={10} />;

export const Critical = () => <StorageUsageCard used={9.8} total={10} />;
