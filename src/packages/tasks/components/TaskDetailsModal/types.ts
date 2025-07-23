export interface TaskDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: {
    id: string;
    title: string;
    description?: string;
    status: 'todo' | 'in-progress' | 'done';
    dueDate?: string;
    assignee?: {
      name: string;
      imageUrl?: string;
    };
    attachments?: [
      {
        name: string;
        url: string;
        type: string;
      },
      {
        name: string;
        url: string;
        type: string;
      }
    ];
    comments?: string[];
  };
} 