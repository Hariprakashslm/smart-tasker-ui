import { KanbanBoard } from './screens/KanbanBoard';

export { BoardColumn } from './components/BoardColumn';
export { ColumnAddTaskButton } from './components/ColumnAddTaskButton';
export { ColumnHeader } from './components/ColumnHeader';

export const screens = {
  KanbanBoard,
};

// Type exports
export type { BoardColumnProps, TaskStatus as BoardColumnStatus } from './components/BoardColumn/types';
export type { ColumnAddTaskButtonProps } from './components/ColumnAddTaskButton/types';
export type { ColumnHeaderProps } from './components/ColumnHeader/types';
export type { KanbanBoardProps, TaskStatus as KanbanBoardStatus } from './screens/KanbanBoard/types';
