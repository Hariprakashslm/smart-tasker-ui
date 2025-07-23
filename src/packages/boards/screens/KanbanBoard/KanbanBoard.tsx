// src/ui/boards/KanbanBoard.tsx
import React from 'react';
import './KanbanBoard.css';

import { BoardColumn } from '@boards/BoardColumn';
import { KanbanBoardProps, TaskStatus } from './types';

const COLUMN_CONFIG: { title: string; status: TaskStatus }[] = [
  { title: 'To Do', status: 'todo' },
  { title: 'In Progress', status: 'in-progress' },
  { title: 'Done', status: 'done' },
];

export const KanbanBoard: React.FC<KanbanBoardProps> = ({
  tasks,
  onTaskClick,
  onAddTask,
}) => {
  return (
    <div className="kanban-board">
      {COLUMN_CONFIG.map(({ title, status }) => {
        const filteredTasks = tasks.filter((task) => task.status === status);
        return (
          <BoardColumn
            key={status}
            title={title}
            status={status}
            tasks={filteredTasks}
            onTaskClick={onTaskClick}
            onAddTask={onAddTask}
          />
        );
      })}
    </div>
  );
};
