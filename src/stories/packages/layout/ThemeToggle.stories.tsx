// src/ui-stories/common/ThemeToggle.stories.tsx
import React from 'react';
import { ThemeToggle } from '@layout/ThemeToggle';

export default {
  title: 'Packages/Layout/ThemeToggle',
  component: ThemeToggle,
};

export const Default = () => (
  <div style={{ padding: 20 }}>
    <ThemeToggle />
  </div>
);
