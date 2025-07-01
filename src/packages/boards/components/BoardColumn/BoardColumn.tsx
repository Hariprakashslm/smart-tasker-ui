// src/ui/boards/BoardColumn.tsx
import React from 'react';
import './BoardColumn.css';

import { TaskCard, TaskCardProps } from 'tasks/TaskCard';
import { ColumnAddTaskButton } from 'boards/ColumnAddTaskButton';
type TaskStatus = 'todo' | 'in-progress' | 'done';
export interface BoardColumnProps {
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  tasks: TaskCardProps[];
  onTaskClick?: (taskId: string) => void;
  onAddTask?: (status: TaskStatus) => void;
}

export const BoardColumn: React.FC<BoardColumnProps> = ({
  title,
  status,
  tasks,
  onTaskClick,
  onAddTask,
}) => {
  return (
    <div className="board-column">
      <div className="board-column-header">
        <h3 className="board-column-title">
          {title} <span className="board-column-count">({tasks.length})</span>
        </h3>
      </div>

      <div className="board-column-tasks">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="board-column-task-wrapper"
            onClick={() => onTaskClick?.(`${index}`)} // You can pass task.id here if available
          >
            <TaskCard {...task} />
          </div>
        ))}
      </div>

      {onAddTask && (
        <ColumnAddTaskButton status={status} onAddTask={onAddTask} />
      )}
    </div>
  );
};
