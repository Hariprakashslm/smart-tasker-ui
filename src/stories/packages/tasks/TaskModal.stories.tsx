// src/ui-stories/tasks/TaskModal.stories.tsx
import React, { useState } from 'react';
import { TaskModal, TaskData, TaskAttachment, TaskDependency } from '@tasks/TaskModal';

export default {
  title: 'Packages/Tasks/TaskModal',
  component: TaskModal,
  parameters: {
    docs: {
      description: {
        component: `
A comprehensive task management modal with the following features:

- **Multiple Modes**: Create, edit, and view modes
- **Auto-save**: Automatically saves changes every 30 seconds
- **File Management**: Drag & drop file uploads with size limits
- **Task Dependencies**: Link tasks to other tasks
- **Time Tracking**: Track estimated and actual hours
- **Rich Comments**: Full comment system with threading
- **Activity History**: View all changes made to the task
- **Responsive Design**: Works on all screen sizes
- **Accessibility**: Full keyboard navigation and screen reader support

## Usage

\`\`\`tsx
<TaskModal
  isOpen={true}
  mode="edit"
  initialData={taskData}
  onSave={handleSave}
  onClose={handleClose}
/>
\`\`\`
        `,
      },
    },
  },
};

const allAssignees = [
  { id: '1', name: 'Alice Johnson', avatar: 'https://via.placeholder.com/40' },
  { id: '2', name: 'Bob Smith', avatar: 'https://via.placeholder.com/40' },
  { id: '3', name: 'Carol Davis', avatar: 'https://via.placeholder.com/40' },
];

const availableLabels = [
  { label: 'Bug', value: 'bug', color: '#f44336' },
  { label: 'Feature', value: 'feature', color: '#2196f3' },
  { label: 'Enhancement', value: 'enhancement', color: '#4caf50' },
  { label: 'Documentation', value: 'documentation', color: '#ff9800' },
  { label: 'High Priority', value: 'high-priority', color: '#e91e63' },
];

const availableTasks: TaskDependency[] = [
  { id: 'task-1', title: 'Design user interface', status: 'done' },
  { id: 'task-2', title: 'Implement authentication', status: 'in-progress' },
  { id: 'task-3', title: 'Write API documentation', status: 'todo' },
  { id: 'task-4', title: 'Set up CI/CD pipeline', status: 'todo' },
];

const sampleAttachments: TaskAttachment[] = [
  {
    id: 'att-1',
    name: 'screenshot.png',
    url: 'https://via.placeholder.com/300x200',
    type: 'image/png',
    size: 1024000,
    uploadedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'att-2',
    name: 'requirements.pdf',
    url: 'https://example.com/sample.pdf',
    type: 'application/pdf',
    size: 2048000,
    uploadedAt: '2024-01-14T15:45:00Z',
  },
];

const sampleTaskData: TaskData = {
  id: 'task-123',
  title: 'Fix login authentication bug',
  description: 'Users are experiencing issues with the login flow. The authentication token is not being properly validated, causing users to be logged out unexpectedly. This needs to be fixed urgently as it affects all users.',
  assignee: '1',
  labels: ['bug', 'high-priority'],
  dueDate: '2024-02-15',
  priority: 'high',
  status: 'in-progress',
  attachments: sampleAttachments,
  dependencies: [availableTasks[0], availableTasks[1]],
  estimatedHours: 8,
  actualHours: 4,
  tags: ['authentication', 'security', 'frontend'],
};

// Mock functions for callbacks
const mockSave = async (data: TaskData): Promise<void> => {
  console.log('Saving task:', data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
};

const mockDelete = async (taskId: string): Promise<void> => {
  console.log('Deleting task:', taskId);
  await new Promise(resolve => setTimeout(resolve, 1000));
};

const mockAddComment = async (comment: any): Promise<void> => {
  console.log('Adding comment:', comment);
  await new Promise(resolve => setTimeout(resolve, 500));
};

const mockUploadAttachment = async (file: File): Promise<TaskAttachment> => {
  console.log('Uploading file:', file.name);
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return {
    id: `att-${Date.now()}`,
    name: file.name,
    url: URL.createObjectURL(file),
    type: file.type,
    size: file.size,
    uploadedAt: new Date().toISOString(),
  };
};

const mockRemoveAttachment = async (attachmentId: string): Promise<void> => {
  console.log('Removing attachment:', attachmentId);
  await new Promise(resolve => setTimeout(resolve, 500));
};

export const CreateMode = () => {
  const [open, setOpen] = useState(true);

  return (
    <TaskModal
      isOpen={open}
      mode="create"
      onClose={() => setOpen(false)}
      allAssignees={allAssignees}
      availableLabels={availableLabels}
      availableTasks={availableTasks}
      onSave={mockSave}
      onAddComment={mockAddComment}
      onUploadAttachment={mockUploadAttachment}
      onRemoveAttachment={mockRemoveAttachment}
    />
  );
};

CreateMode.storyName = 'Create Mode';
CreateMode.parameters = {
  docs: {
    description: {
      story: 'Create a new task with all features enabled.',
    },
  },
};

export const EditMode = () => {
  const [open, setOpen] = useState(true);

  return (
    <TaskModal
      isOpen={open}
      mode="edit"
      initialData={sampleTaskData}
      onClose={() => setOpen(false)}
      allAssignees={allAssignees}
      availableLabels={availableLabels}
      availableTasks={availableTasks}
      onSave={mockSave}
      onDelete={mockDelete}
      onAddComment={mockAddComment}
      onUploadAttachment={mockUploadAttachment}
      onRemoveAttachment={mockRemoveAttachment}
    />
  );
};

EditMode.storyName = 'Edit Mode';
EditMode.parameters = {
  docs: {
    description: {
      story: 'Edit an existing task with pre-filled data and all features enabled.',
    },
  },
};

export const ViewMode = () => {
  const [open, setOpen] = useState(true);

  return (
    <TaskModal
      isOpen={open}
      mode="view"
      initialData={sampleTaskData}
      onClose={() => setOpen(false)}
      allAssignees={allAssignees}
      availableLabels={availableLabels}
      availableTasks={availableTasks}
      onSave={mockSave}
    />
  );
};

ViewMode.storyName = 'View Mode';
ViewMode.parameters = {
  docs: {
    description: {
      story: 'View task details in read-only mode.',
    },
  },
};

export const MinimalFeatures = () => {
  const [open, setOpen] = useState(true);

  return (
    <TaskModal
      isOpen={open}
      mode="edit"
      initialData={sampleTaskData}
      onClose={() => setOpen(false)}
      allAssignees={allAssignees}
      availableLabels={availableLabels}
      onSave={mockSave}
      enableDependencies={false}
      enableTimeTracking={false}
    />
  );
};

MinimalFeatures.storyName = 'Minimal Features';
MinimalFeatures.parameters = {
  docs: {
    description: {
      story: 'Task modal with minimal features - no dependencies or time tracking.',
    },
  },
};

export const WithAutoSave = () => {
  const [open, setOpen] = useState(true);

  return (
    <TaskModal
      isOpen={open}
      mode="edit"
      initialData={sampleTaskData}
      onClose={() => setOpen(false)}
      allAssignees={allAssignees}
      availableLabels={availableLabels}
      availableTasks={availableTasks}
      onSave={mockSave}
      onAddComment={mockAddComment}
      onUploadAttachment={mockUploadAttachment}
      onRemoveAttachment={mockRemoveAttachment}
      autoSaveInterval={5000} // 5 seconds for demo
    />
  );
};

WithAutoSave.storyName = 'With Auto-Save';
WithAutoSave.parameters = {
  docs: {
    description: {
      story: 'Task modal with auto-save enabled (set to 5 seconds for demo). Changes are automatically saved.',
    },
  },
};

export const WithFileUpload = () => {
  const [open, setOpen] = useState(true);

  return (
    <TaskModal
      isOpen={open}
      mode="edit"
      initialData={sampleTaskData}
      onClose={() => setOpen(false)}
      allAssignees={allAssignees}
      availableLabels={availableLabels}
      onSave={mockSave}
      onUploadAttachment={mockUploadAttachment}
      onRemoveAttachment={mockRemoveAttachment}
      maxFileSize={5 * 1024 * 1024} // 5MB
      allowedFileTypes={['image/*', 'application/pdf']}
    />
  );
};

WithFileUpload.storyName = 'With File Upload';
WithFileUpload.parameters = {
  docs: {
    description: {
      story: 'Task modal with file upload capabilities. Supports drag & drop and file size validation.',
    },
  },
};

export const WithDependencies = () => {
  const [open, setOpen] = useState(true);

  return (
    <TaskModal
      isOpen={open}
      mode="edit"
      initialData={sampleTaskData}
      onClose={() => setOpen(false)}
      allAssignees={allAssignees}
      availableLabels={availableLabels}
      availableTasks={availableTasks}
      onSave={mockSave}
      enableDependencies={true}
      enableTimeTracking={false}
    />
  );
};

WithDependencies.storyName = 'With Dependencies';
WithDependencies.parameters = {
  docs: {
    description: {
      story: 'Task modal with dependency management. Link tasks to other tasks in the system.',
    },
  },
};

export const WithTimeTracking = () => {
  const [open, setOpen] = useState(true);

  return (
    <TaskModal
      isOpen={open}
      mode="edit"
      initialData={sampleTaskData}
      onClose={() => setOpen(false)}
      allAssignees={allAssignees}
      availableLabels={availableLabels}
      onSave={mockSave}
      enableDependencies={false}
      enableTimeTracking={true}
    />
  );
};

WithTimeTracking.storyName = 'With Time Tracking';
WithTimeTracking.parameters = {
  docs: {
    description: {
      story: 'Task modal with time tracking features. Track estimated and actual hours.',
    },
  },
};
