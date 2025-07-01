// src/ui/tasks/TaskForm.tsx
import React, { useState, useEffect } from 'react';
import './TaskForm.css';

import { Input } from 'core/components/Input';
import { TextArea } from 'core/components/Textarea';
import { AssigneeDropdown } from 'tasks/components/AssigneeDropdown';
import { LabelSelector } from 'tasks/components/LabelSelector';
import { DueDatePicker } from 'tasks/components/DueDatePicker';
import { Button } from 'core/components/Button';

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

export const TaskForm: React.FC<TaskFormProps> = ({
  initialData = {},
  allAssignees,
  availableLabels,
  onSubmit,
  onCancel,
  submitLabel = 'Save',
}) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [assignee, setAssignee] = useState<string | null>(
    initialData.assignee || null
  );
  const [labels, setLabels] = useState<string[]>(initialData.labels || []);
  const [dueDate, setDueDate] = useState(initialData.dueDate || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, assignee, labels, dueDate });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
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

      <div className="task-form-actions">
        {onCancel && (
          <Button type="button" onClick={onCancel} label="Cancel"></Button>
        )}
        <Button type="submit" label="submitLabel"></Button>
      </div>
    </form>
  );
};
