// srctasks/TaskModal.tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import './TaskModal.css';

import { Modal } from '@core/Modal';
import { Alert } from '@core/Alert';
import { TaskModalTabs } from './components/TaskModalTabs';
import { TaskDetailsTab } from './components/TaskDetailsTab';
import { TaskAttachmentsTab } from './components/TaskAttachmentsTab';
import { TaskCommentsTab } from './components/TaskCommentsTab';
import { TaskDependenciesTab } from './components/TaskDependenciesTab';
import { TaskTimeTrackingTab } from './components/TaskTimeTrackingTab';
import { TaskHistoryTab } from './components/TaskHistoryTab';
import { TaskAutoSaveIndicator } from './components/TaskAutoSaveIndicator';
import { TaskModalActions } from './components/TaskModalActions';
import { CommentItem } from '@tasks/CommentThread';

export interface TaskAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
}

export interface TaskDependency {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
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
  attachments: TaskAttachment[];
  dependencies: TaskDependency[];
  estimatedHours?: number;
  actualHours?: number;
  tags: string[];
}

export interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'create' | 'edit' | 'view';
  initialData?: Partial<TaskData>;
  
  // Data sources
  allAssignees: { id: string; name: string; avatar?: string }[];
  availableLabels: { label: string; value: string; color?: string }[];
  availableTasks?: TaskDependency[];
  
  // Callbacks
  onSave: (data: TaskData) => Promise<void>;
  onDelete?: (taskId: string) => Promise<void>;
  onAddComment?: (comment: CommentItem) => Promise<void>;
  onUploadAttachment?: (file: File) => Promise<TaskAttachment>;
  onRemoveAttachment?: (attachmentId: string) => Promise<void>;
  
  // Configuration
  autoSaveInterval?: number; // in milliseconds
  maxFileSize?: number; // in bytes
  allowedFileTypes?: string[];
  enableRichText?: boolean;
  enableDependencies?: boolean;
  enableTimeTracking?: boolean;
}

export const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  mode,
  initialData = {},
  allAssignees,
  availableLabels,
  availableTasks = [],
  onSave,
  onDelete,
  onAddComment,
  onUploadAttachment,
  onRemoveAttachment,
  autoSaveInterval = 30000, // 30 seconds
  maxFileSize = 10 * 1024 * 1024, // 10MB
  allowedFileTypes = ['image/*', 'application/pdf', 'text/*'],
  enableRichText = true,
  enableDependencies = true,
  enableTimeTracking = true,
}) => {
  // Form state
  const [formData, setFormData] = useState<TaskData>({
    title: '',
    description: '',
    assignee: null,
    labels: [],
    dueDate: '',
    priority: 'medium',
    status: 'todo',
    attachments: [],
    dependencies: [],
    estimatedHours: 0,
    actualHours: 0,
    tags: [],
    ...initialData,
  });

  // UI state
  const [activeTab, setActiveTab] = useState('details');
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Refs
  const autoSaveTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Auto-save functionality
  const saveTask = useCallback(async (data: TaskData, showSuccess = false) => {
    if (mode === 'view') return;
    
    try {
      setIsSaving(true);
      setError(null);
      await onSave(data);
      setHasUnsavedChanges(false);
      if (showSuccess) {
        setSuccess('Task saved successfully!');
        setTimeout(() => setSuccess(null), 3000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save task');
    } finally {
      setIsSaving(false);
    }
  }, [mode, onSave]);

  // Auto-save effect
  useEffect(() => {
    if (hasUnsavedChanges && mode !== 'view') {
      autoSaveTimeoutRef.current = setTimeout(() => {
        saveTask(formData);
      }, autoSaveInterval);
    }

    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, [formData, hasUnsavedChanges, autoSaveInterval, saveTask, mode]);

  // Update form data and trigger auto-save
  const updateFormData = useCallback((updates: Partial<TaskData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
    setHasUnsavedChanges(true);
  }, []);

  // Manual save
  const handleSave = useCallback(async () => {
    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }
    await saveTask(formData, true);
  }, [formData, saveTask]);

  // Delete task
  const handleDelete = useCallback(async () => {
    if (!formData.id || !onDelete) return;

    if (!window.confirm('Are you sure you want to delete this task? This action cannot be undone.')) {
      return;
    }

    try {
      setIsDeleting(true);
      await onDelete(formData.id);
      onClose();
    } catch (err) {
      setError('Failed to delete task');
    } finally {
      setIsDeleting(false);
    }
  }, [formData.id, onDelete, onClose]);

  // Close handler with unsaved changes warning
  const handleClose = useCallback(() => {
    if (hasUnsavedChanges && mode !== 'view') {
      if (window.confirm('You have unsaved changes. Are you sure you want to close?')) {
        onClose();
      }
    } else {
      onClose();
    }
  }, [hasUnsavedChanges, mode, onClose]);

  // Dependency handlers
  const handleAddDependency = useCallback((dependency: TaskDependency) => {
    updateFormData({
      dependencies: [...formData.dependencies, dependency]
    });
  }, [formData.dependencies, updateFormData]);

  const handleRemoveDependency = useCallback((dependencyId: string) => {
    updateFormData({
      dependencies: formData.dependencies.filter(d => d.id !== dependencyId)
    });
  }, [formData.dependencies, updateFormData]);

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <TaskDetailsTab
            formData={formData}
            onUpdate={updateFormData}
            mode={mode}
            allAssignees={allAssignees}
            availableLabels={availableLabels}
            enableTimeTracking={enableTimeTracking}
          />
        );

      case 'attachments':
        return (
          <TaskAttachmentsTab
            attachments={formData.attachments}
            mode={mode}
            onUploadAttachment={onUploadAttachment}
            onRemoveAttachment={onRemoveAttachment}
            maxFileSize={maxFileSize}
            allowedFileTypes={allowedFileTypes}
          />
        );

      case 'comments':
        return (
          <TaskCommentsTab
            mode={mode}
            onAddComment={onAddComment}
          />
        );

      case 'dependencies':
        return (
          <TaskDependenciesTab
            dependencies={formData.dependencies}
            availableTasks={availableTasks}
            mode={mode}
            onAddDependency={handleAddDependency}
            onRemoveDependency={handleRemoveDependency}
          />
        );

      case 'time':
        return (
          <TaskTimeTrackingTab
            formData={formData}
          />
        );

      case 'history':
        return (
          <TaskHistoryTab
            taskId={formData.id}
          />
        );

      default:
        return null;
    }
  };

  const modalBody = (
    <div className="task-modal-container">
      {/* Status messages */}
      {error && (
        <Alert type="error" message={error} onClose={() => setError(null)} />
      )}
      {success && (
        <Alert type="success" message={success} onClose={() => setSuccess(null)} />
      )}

      {/* Auto-save indicator */}
      <TaskAutoSaveIndicator isVisible={hasUnsavedChanges && mode !== 'view'} />

      {/* Tabs */}
      <TaskModalTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        enableDependencies={enableDependencies}
        enableTimeTracking={enableTimeTracking}
      />

      {/* Tab content */}
      <div className="task-modal-content">
        {renderTabContent()}
      </div>

      {/* Actions */}
      <TaskModalActions
        mode={mode}
        onClose={handleClose}
        onSave={handleSave}
        onDelete={handleDelete}
        isSaving={isSaving}
        isDeleting={isDeleting}
        canSave={formData.title.trim().length > 0}
      />
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={`${mode === 'create' ? 'Create' : mode === 'edit' ? 'Edit' : 'View'} Task`}
      size="large"
      content={modalBody}
    />
  );
};
