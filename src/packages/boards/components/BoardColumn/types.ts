import type { TaskCardProps } from '@tasks/TaskCard';

export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface BoardColumnProps {
  title: string;
  status: TaskStatus;
  tasks: TaskCardProps[];
  columnId?: string;
  onTaskClick?: (taskId: string) => void;
  onAddTask?: (status: TaskStatus) => void;
} 