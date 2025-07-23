// src/ui/boards/ColumnAddTaskButton.tsx
import React from 'react';
import './ColumnAddTaskButton.css';
import { Button } from '@core/Button';
import { ColumnAddTaskButtonProps } from './types';

export const ColumnAddTaskButton: React.FC<ColumnAddTaskButtonProps> = ({
  status,
  onAddTask,
}) => {
  return (
    <div className="column-add-task-button">
      <Button
        size="small"
        onClick={() => onAddTask(status)}
        label="+ Add Task"
      ></Button>
    </div>
  );
};
