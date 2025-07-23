import type { TaskCardProps } from '@tasks/TaskCard';

export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface KanbanBoardProps {
  tasks: TaskCardProps[];
  onTaskClick?: (taskId: string) => void;
  onAddTask?: (status: TaskStatus) => void;
} 