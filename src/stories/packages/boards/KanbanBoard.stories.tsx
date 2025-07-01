// src/ui-stories/boards/KanbanBoard.stories.tsx
import React from 'react';
import { KanbanBoard } from 'screens/boards/KanbanBoard';
import type { TaskCardProps } from 'tasks/TaskCard';

export default {
  title: 'Packages/Boards/KanbanBoard',
  component: KanbanBoard,
};

const allTasks: TaskCardProps[] = [
  {
    title: 'Fix login issue',
    status: 'todo',
    dueDate: '2025-07-01',
    assignee: { name: 'Alice', imageUrl: 'https://i.pravatar.cc/40?img=1' },
  },
  {
    title: 'Create landing page',
    status: 'in-progress',
    dueDate: '2025-07-02',
    assignee: { name: 'Bob', imageUrl: 'https://i.pravatar.cc/40?img=2' },
  },
  {
    title: 'Deploy to staging',
    status: 'done',
    dueDate: '2025-06-30',
    assignee: { name: 'Charlie', imageUrl: 'https://i.pravatar.cc/40?img=3' },
  },
];

export const Default = () => (
  <KanbanBoard
    tasks={allTasks}
    onTaskClick={(id) => alert(`Clicked task: ${id}`)}
    onAddTask={(status) => alert(`Add task to: ${status}`)}
  />
);
