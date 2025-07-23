import type { TaskData } from '../../types';

export interface TaskDetailsTabProps {
  formData: TaskData;
  onUpdate: (updates: Partial<TaskData>) => void;
  mode: 'create' | 'edit' | 'view';
  allAssignees: { id: string; name: string; avatar?: string }[];
  availableLabels: { label: string; value: string; color?: string }[];
  enableTimeTracking?: boolean;
} 