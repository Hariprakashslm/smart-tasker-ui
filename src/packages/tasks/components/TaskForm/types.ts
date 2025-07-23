export interface TaskFormData {
  title: string;
  description: string;
  assignee: string | null;
  labels: string[];
  dueDate: string;
}

export interface TaskFormProps {
  initialData?: Partial<TaskFormData>;
  allAssignees: { id: string; name: string }[];
  availableLabels: { label: string; value: string; color?: string }[];
  onSubmit: (data: TaskFormData) => void;
  onCancel?: () => void;
  submitLabel?: string;
} 