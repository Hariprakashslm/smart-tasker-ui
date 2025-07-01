// src/ui-stories/boards/BoardColumn.stories.tsx
import React from 'react';
import { BoardColumn } from 'boards/BoardColumn';
import type { TaskCardProps } from 'tasks/TaskCard';

export default {
  title: 'Packages/Boards/BoardColumn',
  component: BoardColumn,
};

const sampleTasks: TaskCardProps[] = [
  {
    title: 'Fix login bug',
    description: 'OAuth redirect issue needs to be resolved',
    dueDate: '2025-07-01',
    status: 'todo',
    assignee: {
      name: 'Alice',
      imageUrl: 'https://i.pravatar.cc/40?img=1',
    },
    completed: false,
  },
  {
    title: 'Update dashboard',
    dueDate: '2025-07-03',
    status: 'todo',
    assignee: {
      name: 'Bob',
      imageUrl: 'https://i.pravatar.cc/40?img=2',
    },
    completed: true,
  },
];

export const Default = () => (
  <div style={{ width: 320 }}>
    <BoardColumn
      title="To Do"
      status="todo"
      tasks={sampleTasks}
      onTaskClick={(taskId) => alert(`Clicked task ${taskId}`)}
      onAddTask={(status) => alert(`Add new task to: ${status}`)}
    />
  </div>
);
