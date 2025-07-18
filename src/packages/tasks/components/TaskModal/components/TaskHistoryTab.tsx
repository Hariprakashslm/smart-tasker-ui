import React from 'react';
import { TaskHistory } from '@tasks/TaskHistory';
import './TaskHistoryTab.css';

export interface TaskHistoryTabProps {
  taskId?: string;
}

export const TaskHistoryTab: React.FC<TaskHistoryTabProps> = ({
  taskId,
}) => {
  // Mock history data - in real app, this would come from props or API
  const mockHistory = taskId ? [
    {
      id: '1',
      user: 'Alice Johnson',
      action: 'created this task',
      timestamp: '2024-01-15T10:30:00Z',
    },
    {
      id: '2',
      user: 'Bob Smith',
      action: 'assigned the task to Carol',
      timestamp: '2024-01-15T11:45:00Z',
    },
    {
      id: '3',
      user: 'Carol Davis',
      action: 'updated the status to "In Progress"',
      timestamp: '2024-01-16T09:15:00Z',
    },
  ] : [];

  return (
    <div className="task-history-tab">
      <TaskHistory history={mockHistory} />
    </div>
  );
}; 