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