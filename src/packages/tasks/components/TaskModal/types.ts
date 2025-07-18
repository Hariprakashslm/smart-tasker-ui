export interface TaskDependency {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  type: string; // MIME type (e.g., image/jpeg, application/pdf)
  size?: number; // in bytes
  uploadedAt?: string;
}

export interface TaskData {
  id?: string;
  title: string;
  description: string;
  assignee: string | null;
  labels: string[];
  dueDate: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'todo' | 'in-progress' | 'done';
  attachments: Attachment[];
  dependencies: TaskDependency[];
  estimatedHours?: number;
  actualHours?: number;
  tags: string[];
}

export interface TaskFormData {
  title: string;
  description: string;
  assignee: string | null;
  labels: string[];
  dueDate: string;
} 