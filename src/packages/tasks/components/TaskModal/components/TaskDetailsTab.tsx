import React from 'react';
import { Input } from '@core/Input';
import { TextArea } from '@core/Textarea';
import { Select } from '@core/Select';
import { AssigneeDropdown } from '@tasks/AssigneeDropdown';
import { LabelSelector } from '@tasks/LabelSelector';
import { DueDatePicker } from '@tasks/DueDatePicker';
import { TaskData } from '../TaskModal';
import './TaskDetailsTab.css';

export interface TaskDetailsTabProps {
  formData: TaskData;
  onUpdate: (updates: Partial<TaskData>) => void;
  mode: 'create' | 'edit' | 'view';
  allAssignees: { id: string; name: string; avatar?: string }[];
  availableLabels: { label: string; value: string; color?: string }[];
  enableTimeTracking?: boolean;
}

const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Low', color: '#28a745' },
  { value: 'medium', label: 'Medium', color: '#ffc107' },
  { value: 'high', label: 'High', color: '#fd7e14' },
  { value: 'urgent', label: 'Urgent', color: '#dc3545' },
];

const STATUS_OPTIONS = [
  { value: 'todo', label: 'To Do', color: '#6c757d' },
  { value: 'in-progress', label: 'In Progress', color: '#007bff' },
  { value: 'done', label: 'Done', color: '#28a745' },
];

export const TaskDetailsTab: React.FC<TaskDetailsTabProps> = ({
  formData,
  onUpdate,
  mode,
  allAssignees,
  availableLabels,
  enableTimeTracking = true,
}) => {
  const isReadOnly = mode === 'view';

  return (
    <div className="task-details-tab">
      <div className="task-modal-row">
        <Input
          label="Title *"
          value={formData.title}
          onChange={(e) => onUpdate({ title: e.target.value })}
          placeholder="Enter task title..."
          disabled={isReadOnly}
        />
      </div>

      <div className="task-modal-row">
        <TextArea
          label="Description"
          value={formData.description}
          onChange={(e) => onUpdate({ description: e })}
          placeholder="Describe the task..."
          disabled={isReadOnly}
          rows={4}
        />
      </div>

      <div className="task-modal-row task-modal-meta">
        <div className="task-modal-meta-item">
          <Select
            label="Priority"
            value={formData.priority}
            onChange={(value) => onUpdate({ priority: value as TaskData['priority'] })}
            options={PRIORITY_OPTIONS}
            disabled={isReadOnly}
          />
        </div>
        
        <div className="task-modal-meta-item">
          <Select
            label="Status"
            value={formData.status}
            onChange={(value) => onUpdate({ status: value as TaskData['status'] })}
            options={STATUS_OPTIONS}
            disabled={isReadOnly}
          />
        </div>
      </div>

      <div className="task-modal-row task-modal-meta">
        <div className="task-modal-meta-item">
          <AssigneeDropdown
            assignees={allAssignees}
            selectedId={formData.assignee}
            onSelect={(id) => onUpdate({ assignee: id })}
            disabled={isReadOnly}
          />
        </div>
        
        <div className="task-modal-meta-item">
          <DueDatePicker
            value={formData.dueDate}
            onChange={(date) => onUpdate({ dueDate: date })}
            disabled={isReadOnly}
          />
        </div>
      </div>

      <div className="task-modal-row">
        <LabelSelector
          selectedLabels={formData.labels}
          availableLabels={availableLabels}
          onChange={(labels) => onUpdate({ labels })}
        />
      </div>

      {enableTimeTracking && (
        <div className="task-modal-row task-modal-meta">
          <div className="task-modal-meta-item">
            <Input
              label="Estimated Hours"
              type="number"
              value={String(formData.estimatedHours || '')}
              onChange={(e) => onUpdate({ estimatedHours: parseFloat(e.target.value) || 0 })}
              placeholder="0"
              disabled={isReadOnly}
            />
          </div>
          
          <div className="task-modal-meta-item">
            <Input
              label="Actual Hours"
              type="number"
              value={String(formData.actualHours || '')}
              onChange={(e) => onUpdate({ actualHours: parseFloat(e.target.value) || 0 })}
              placeholder="0"
              disabled={isReadOnly}
            />
          </div>
        </div>
      )}
    </div>
  );
}; 