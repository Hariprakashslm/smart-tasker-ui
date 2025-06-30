// src/ui-stories/boards/ColumnAddTaskButton.stories.tsx
import React from 'react';
import { ColumnAddTaskButton } from 'boards/ColumnAddTaskButton';

export default {
  title: 'Boards/ColumnAddTaskButton',
  component: ColumnAddTaskButton,
};

export const Default = () => (
  <ColumnAddTaskButton
    status="todo"
    onAddTask={(status) => alert(`Add task in column: ${status}`)}
  />
);
