// src/ui/boards/KanbanBoard.tsx
import React from 'react';
import './KanbanBoard.css';

import { BoardColumn } from 'boards/components/BoardColumn';
import type { TaskCardProps } from 'tasks/components/TaskCard';

type TaskStatus = 'todo' | 'in-progress' | 'done';
export interface KanbanBoardProps {
  tasks: TaskCardProps[];
  onTaskClick?: (taskId: string) => void;
  onAddTask?: (status: TaskStatus) => void;
}

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
