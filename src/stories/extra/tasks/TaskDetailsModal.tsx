// src/packages/tasks/TaskDetailsModal.tsx
import React from 'react';
import './TaskDetailsModal.css';
import { Modal } from 'core/Modal';
import { Badge } from 'core/Badge';
import { Avatar } from 'core/Avatar';
import { CommentBox } from 'tasks/CommentBox';
import { AttachmentPreview } from 'tasks/AttachmentPreview';

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

export const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({
  isOpen,
  onClose,
  task,
}) => {
  if (!isOpen) return null;

  const badgeType =
    task.status === 'done'
      ? 'success'
      : task.status === 'in-progress'
      ? 'warning'
      : 'default';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={task.title}>
      <div className="task-details">
        <div className="task-details-meta">
          <Badge count={task.status} type={badgeType} />
          {task.dueDate && <div className="task-due">📅 {task.dueDate}</div>}
          {task.assignee && (
            <div className="task-assignee">
              <Avatar name={task.assignee.name} src={task.assignee.imageUrl} />
              <span>{task.assignee.name}</span>
            </div>
          )}
        </div>

        {task.description && (
          <p className="task-description">{task.description}</p>
        )}

        {task?.attachments && task?.attachments.length > 0 && (
          <AttachmentPreview attachments={task.attachments} />
        )}

        {/* <CommentBox  
        
        initialComments={task.comments || []}
        
        /> */}

        <CommentBox onSubmit={() => {}} />
      </div>
    </Modal>
  );
};
