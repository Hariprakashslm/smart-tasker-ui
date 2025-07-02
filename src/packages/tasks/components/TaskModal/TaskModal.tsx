// srctasks/TaskModal.tsx
import React, { useState } from 'react';
import './TaskModal.css';

import { Modal } from '@core/Modal';
import { Input } from '@core/Input';
import { TextArea } from '@core/Textarea';
import { Button } from '@core/Button';
import { AssigneeDropdown } from '@tasks/AssigneeDropdown';
import { LabelSelector } from '@tasks/LabelSelector';
import { DueDatePicker } from '@tasks/DueDatePicker';
import { AttachmentPreview } from '@tasks/AttachmentPreview';
import { CommentBox } from '@tasks/CommentBox';

export interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;

  initialData: {
    title: string;
    description: string;
    assignee: string | null;
    labels: string[];
    dueDate: string;
    attachments: {
      name: string;
      url: string;
      type: string;
    }[];
  };

  allAssignees: { id: string; name: string }[];
  availableLabels: { label: string; value: string; color?: string }[];

  onSave: (data: {
    title: string;
    description: string;
    assignee: string | null;
    labels: string[];
    dueDate: string;
  }) => void;

  onAddComment?: (text: string) => void;
}

export const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  initialData,
  allAssignees,
  availableLabels,
  onSave,
  onAddComment,
}) => {
  const [title, setTitle] = useState(initialData.title);
  const [description, setDescription] = useState(initialData.description);
  const [assignee, setAssignee] = useState<string | null>(initialData.assignee);
  const [labels, setLabels] = useState<string[]>(initialData.labels);
  const [dueDate, setDueDate] = useState(initialData.dueDate);

  const handleSave = () => {
    onSave({ title, description, assignee, labels, dueDate });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Task">
      <div className="task-modal-body">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          label="Description"
          value={description}
          onChange={(e) => setDescription(e)}
        />
        <AssigneeDropdown
          assignees={allAssignees}
          selectedId={assignee}
          onSelect={setAssignee}
        />
        <LabelSelector
          selectedLabels={labels}
          availableLabels={availableLabels}
          onChange={setLabels}
        />
        <DueDatePicker value={dueDate} onChange={setDueDate} />

        {initialData.attachments?.length > 0 && (
          <div>
            <label className="task-label">Attachments</label>
            <AttachmentPreview attachments={initialData.attachments} />
          </div>
        )}

        {onAddComment && (
          <div>
            <label className="task-label">Comment</label>
            <CommentBox onSubmit={onAddComment} />
          </div>
        )}

        <div className="task-modal-actions">
          <Button onClick={onClose} label="Cancel"></Button>
          <Button onClick={handleSave} label="Save"></Button>
        </div>
      </div>
    </Modal>
  );
};
