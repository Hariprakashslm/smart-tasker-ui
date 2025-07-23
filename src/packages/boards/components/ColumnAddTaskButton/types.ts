import type { TaskStatus } from '../BoardColumn/types';

export interface ColumnAddTaskButtonProps {
  status: TaskStatus;
  onAddTask: (status: TaskStatus) => void;
} 