import React from 'react';
import { Spinner } from '@core/Spinner';
import './TaskAutoSaveIndicator.css';

export interface TaskAutoSaveIndicatorProps {
  isVisible: boolean;
}

export const TaskAutoSaveIndicator: React.FC<TaskAutoSaveIndicatorProps> = ({
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="task-auto-save-indicator">
      <Spinner size="small" />
      <span>Auto-saving...</span>
    </div>
  );
}; 