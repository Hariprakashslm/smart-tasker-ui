// src/ui-stories/boards/ColumnHeader.stories.tsx
import React from 'react';
import { ColumnHeader } from '@boards/ColumnHeader';

export default {
  title: 'Packages/Boards/ColumnHeader',
  component: ColumnHeader,
};

export const Default = () => <ColumnHeader title="In Progress" taskCount={4} />;

export const WithActions = () => (
  <ColumnHeader
    title="Done"
    taskCount={8}
    actions={<button style={{ fontSize: 12 }}>⋮</button>}
  />
);
