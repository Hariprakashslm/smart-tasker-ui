import React from 'react';
import './TaskCard.css';

import { Checkbox } from 'core/components/Checkbox';
import { Badge } from 'core/components/Badge';
import { Avatar } from 'core/components/Avatar';
import { Tooltip } from 'core/components/Tooltip';

export interface TaskCardProps {
  title: string;
  description?: string;
  dueDate?: string;
  status?: 'todo' | 'in-progress' | 'done';
  assignee?: {
    name: string;
    imageUrl?: string;
  };
  completed?: boolean;
  onToggleComplete?: (checked: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  dueDate,
  status = 'todo',
  assignee,
  completed = false,
  onToggleComplete,
}) => {
  const statusVariantMap = {
    todo: 'default',
    'in-progress': 'warning',
    done: 'success',
  } as const;

  return (
    <div className={`task-card ${completed ? 'task-completed' : ''}`}>
      <div className="task-header">
        <Checkbox checked={completed} onChange={onToggleComplete} />
        <div className="task-title">{title}</div>
        <Badge count={status} type={statusVariantMap[status]} />
      </div>

      {description && <p className="task-desc">{description}</p>}

      <div className="task-footer">
        {dueDate && (
          <Tooltip content={`Due: ${dueDate}`}>
            <span className="task-date">📅 {dueDate}</span>
          </Tooltip>
        )}

        {assignee && (
          <Tooltip content={assignee.name}>
            <Avatar name={assignee.name} src={assignee.imageUrl} />
          </Tooltip>
        )}
      </div>
    </div>
  );
};
