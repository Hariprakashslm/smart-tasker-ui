import React, { useState } from 'react';
import { 
  TaskModalTabs,
  TaskDetailsTab,
  TaskAttachmentsTab,
  TaskCommentsTab,
  TaskDependenciesTab,
  TaskTimeTrackingTab,
  TaskHistoryTab,
  TaskAutoSaveIndicator,
  TaskModalActions,
  TaskData,
  TaskDependency
} from '@tasks/TaskModal';
import { Attachment } from '@tasks/TaskModal/types';

export default {
  title: 'Pages/Tasks/TaskModal Components',
  parameters: {
    docs: {
      description: {
        component: `
This section showcases the individual components that make up the TaskModal.
Each component is designed to be reusable and focused on a specific responsibility.
        `,
      },
    },
  },
};

// Mock data
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

const sampleAttachments: Attachment[] = [
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
  description: 'Users are experiencing issues with the login flow. The authentication token is not being properly validated, causing users to be logged out unexpectedly.',
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

// Mock functions
const mockUpdate = (updates: Partial<TaskData>) => {
  console.log('Form updated:', updates);
};

const mockUploadAttachment = async (file: File): Promise<Attachment> => {
  console.log('Uploading file:', file.name);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    id: `att-${Date.now()}`,
    name: file.name,
    url: URL.createObjectURL(file),
    type: file.type,
    size: file.size,
    uploadedAt: new Date().toISOString(),
  };
};

const mockAddComment = async (comment: any): Promise<void> => {
  console.log('Adding comment:', comment);
  await new Promise(resolve => setTimeout(resolve, 500));
};

// TaskModalTabs Stories
export const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>TaskModalTabs Component</h3>
      <TaskModalTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        enableDependencies={true}
        enableTimeTracking={true}
      />
      <p>Active tab: {activeTab}</p>
    </div>
  );
};

TabsComponent.storyName = 'TaskModalTabs';
TabsComponent.parameters = {
  docs: {
    description: {
      story: 'Tab navigation component with configurable features.',
    },
  },
};

export const TabsMinimal = () => {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>TaskModalTabs - Minimal Features</h3>
      <TaskModalTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        enableDependencies={false}
        enableTimeTracking={false}
      />
      <p>Active tab: {activeTab}</p>
    </div>
  );
};

TabsMinimal.storyName = 'TaskModalTabs - Minimal';
TabsMinimal.parameters = {
  docs: {
    description: {
      story: 'Tab navigation with minimal features (no dependencies or time tracking).',
    },
  },
};

// TaskDetailsTab Stories
export const DetailsTab = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskDetailsTab Component</h3>
      <TaskDetailsTab
        formData={sampleTaskData}
        onUpdate={mockUpdate}
        mode="edit"
        allAssignees={allAssignees}
        availableLabels={availableLabels}
        enableTimeTracking={true}
      />
    </div>
  );
};

DetailsTab.storyName = 'TaskDetailsTab';
DetailsTab.parameters = {
  docs: {
    description: {
      story: 'Form fields for task details including title, description, priority, status, assignee, due date, labels, and time tracking.',
    },
  },
};

export const DetailsTabView = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskDetailsTab - View Mode</h3>
      <TaskDetailsTab
        formData={sampleTaskData}
        onUpdate={mockUpdate}
        mode="view"
        allAssignees={allAssignees}
        availableLabels={availableLabels}
        enableTimeTracking={true}
      />
    </div>
  );
};

DetailsTabView.storyName = 'TaskDetailsTab - View Mode';
DetailsTabView.parameters = {
  docs: {
    story: 'Task details in read-only view mode.',
  },
};

export const DetailsTabCreate = () => {
  const emptyTask: TaskData = {
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
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskDetailsTab - Create Mode</h3>
      <TaskDetailsTab
        formData={emptyTask}
        onUpdate={mockUpdate}
        mode="create"
        allAssignees={allAssignees}
        availableLabels={availableLabels}
        enableTimeTracking={true}
      />
    </div>
  );
};

DetailsTabCreate.storyName = 'TaskDetailsTab - Create Mode';
DetailsTabCreate.parameters = {
  docs: {
    story: 'Task details form for creating a new task.',
  },
};

// TaskAttachmentsTab Stories
export const AttachmentsTab = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskAttachmentsTab Component</h3>
      <TaskAttachmentsTab
        attachments={sampleAttachments}
        mode="edit"
        onUploadAttachment={mockUploadAttachment}
        maxFileSize={5 * 1024 * 1024} // 5MB
        allowedFileTypes={['image/*', 'application/pdf']}
      />
    </div>
  );
};

AttachmentsTab.storyName = 'TaskAttachmentsTab';
AttachmentsTab.parameters = {
  docs: {
    story: 'File upload and attachment management with drag & drop support.',
  },
};

export const AttachmentsTabEmpty = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskAttachmentsTab - Empty State</h3>
      <TaskAttachmentsTab
        attachments={[]}
        mode="edit"
        onUploadAttachment={mockUploadAttachment}
      />
    </div>
  );
};

AttachmentsTabEmpty.storyName = 'TaskAttachmentsTab - Empty';
AttachmentsTabEmpty.parameters = {
  docs: {
    story: 'Attachments tab with no existing attachments.',
  },
};

export const AttachmentsTabView = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskAttachmentsTab - View Mode</h3>
      <TaskAttachmentsTab
        attachments={sampleAttachments}
        mode="view"
      />
    </div>
  );
};

AttachmentsTabView.storyName = 'TaskAttachmentsTab - View Mode';
AttachmentsTabView.parameters = {
  docs: {
    story: 'Attachments tab in read-only view mode.',
  },
};

// TaskCommentsTab Stories
export const CommentsTab = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskCommentsTab Component</h3>
      <TaskCommentsTab
        mode="edit"
        onAddComment={mockAddComment}
      />
    </div>
  );
};

CommentsTab.storyName = 'TaskCommentsTab';
CommentsTab.parameters = {
  docs: {
    story: 'Comments section with ability to add new comments.',
  },
};

// TaskDependenciesTab Stories
export const DependenciesTab = () => {
  const [dependencies, setDependencies] = useState(sampleTaskData.dependencies);

  const handleAddDependency = (dependency: TaskDependency) => {
    setDependencies([...dependencies, dependency]);
  };

  const handleRemoveDependency = (dependencyId: string) => {
    setDependencies(dependencies.filter(d => d.id !== dependencyId));
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskDependenciesTab Component</h3>
      <TaskDependenciesTab
        dependencies={dependencies}
        availableTasks={availableTasks}
        mode="edit"
        onAddDependency={handleAddDependency}
        onRemoveDependency={handleRemoveDependency}
      />
    </div>
  );
};

DependenciesTab.storyName = 'TaskDependenciesTab';
DependenciesTab.parameters = {
  docs: {
    story: 'Dependency management with ability to add and remove task dependencies.',
  },
};

export const DependenciesTabEmpty = () => {
  const [dependencies, setDependencies] = useState<TaskDependency[]>([]);

  const handleAddDependency = (dependency: TaskDependency) => {
    setDependencies([...dependencies, dependency]);
  };

  const handleRemoveDependency = (dependencyId: string) => {
    setDependencies(dependencies.filter(d => d.id !== dependencyId));
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskDependenciesTab - Empty State</h3>
      <TaskDependenciesTab
        dependencies={dependencies}
        availableTasks={availableTasks}
        mode="edit"
        onAddDependency={handleAddDependency}
        onRemoveDependency={handleRemoveDependency}
      />
    </div>
  );
};

DependenciesTabEmpty.storyName = 'TaskDependenciesTab - Empty';
DependenciesTabEmpty.parameters = {
  docs: {
    story: 'Dependencies tab with no existing dependencies.',
  },
};

export const DependenciesTabView = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskDependenciesTab - View Mode</h3>
      <TaskDependenciesTab
        dependencies={sampleTaskData.dependencies}
        availableTasks={availableTasks}
        mode="view"
        onAddDependency={() => {}}
        onRemoveDependency={() => {}}
      />
    </div>
  );
};

DependenciesTabView.storyName = 'TaskDependenciesTab - View Mode';
DependenciesTabView.parameters = {
  docs: {
    story: 'Dependencies tab in read-only view mode.',
  },
};

// TaskTimeTrackingTab Stories
export const TimeTrackingTab = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskTimeTrackingTab Component</h3>
      <TaskTimeTrackingTab
        formData={sampleTaskData}
      />
    </div>
  );
};

TimeTrackingTab.storyName = 'TaskTimeTrackingTab';
TimeTrackingTab.parameters = {
  docs: {
    story: 'Time tracking display with estimated, actual, and remaining hours, plus progress visualization.',
  },
};

export const TimeTrackingTabEmpty = () => {
  const emptyTimeData: TaskData = {
    ...sampleTaskData,
    estimatedHours: 0,
    actualHours: 0,
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskTimeTrackingTab - No Time Data</h3>
      <TaskTimeTrackingTab
        formData={emptyTimeData}
      />
    </div>
  );
};

TimeTrackingTabEmpty.storyName = 'TaskTimeTrackingTab - No Time Data';
TimeTrackingTabEmpty.parameters = {
  docs: {
    story: 'Time tracking tab with no estimated or actual hours.',
  },
};

// TaskHistoryTab Stories
export const HistoryTab = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskHistoryTab Component</h3>
      <TaskHistoryTab
        taskId="task-123"
      />
    </div>
  );
};

HistoryTab.storyName = 'TaskHistoryTab';
HistoryTab.parameters = {
  docs: {
    story: 'Task activity history showing all changes made to the task.',
  },
};

export const HistoryTabEmpty = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px' }}>
      <h3>TaskHistoryTab - No History</h3>
      <TaskHistoryTab
        taskId={undefined}
      />
    </div>
  );
};

HistoryTabEmpty.storyName = 'TaskHistoryTab - No History';
HistoryTabEmpty.parameters = {
  docs: {
    story: 'History tab with no task history available.',
  },
};

// TaskAutoSaveIndicator Stories
export const AutoSaveIndicator = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>TaskAutoSaveIndicator Component</h3>
      <TaskAutoSaveIndicator isVisible={true} />
    </div>
  );
};

AutoSaveIndicator.storyName = 'TaskAutoSaveIndicator';
AutoSaveIndicator.parameters = {
  docs: {
    story: 'Auto-save status indicator showing when changes are being saved automatically.',
  },
};

export const AutoSaveIndicatorHidden = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>TaskAutoSaveIndicator - Hidden</h3>
      <TaskAutoSaveIndicator isVisible={false} />
      <p>Indicator is hidden when isVisible is false</p>
    </div>
  );
};

AutoSaveIndicatorHidden.storyName = 'TaskAutoSaveIndicator - Hidden';
AutoSaveIndicatorHidden.parameters = {
  docs: {
    story: 'Auto-save indicator when not visible (isVisible = false).',
  },
};

// TaskModalActions Stories
export const ModalActions = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>TaskModalActions Component</h3>
      <TaskModalActions
        mode="edit"
        onClose={() => console.log('Close clicked')}
        onSave={() => console.log('Save clicked')}
        onDelete={() => console.log('Delete clicked')}
        isSaving={false}
        isDeleting={false}
        canSave={true}
      />
    </div>
  );
};

ModalActions.storyName = 'TaskModalActions';
ModalActions.parameters = {
  docs: {
    story: 'Action buttons for the task modal with save, cancel, and delete options.',
  },
};

export const ModalActionsView = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>TaskModalActions - View Mode</h3>
      <TaskModalActions
        mode="view"
        onClose={() => console.log('Close clicked')}
        onSave={() => console.log('Save clicked')}
        isSaving={false}
        isDeleting={false}
        canSave={true}
      />
    </div>
  );
};

ModalActionsView.storyName = 'TaskModalActions - View Mode';
ModalActionsView.parameters = {
  docs: {
    story: 'Action buttons in view mode (only close button).',
  },
};

export const ModalActionsLoading = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>TaskModalActions - Loading States</h3>
      <TaskModalActions
        mode="edit"
        onClose={() => console.log('Close clicked')}
        onSave={() => console.log('Save clicked')}
        onDelete={() => console.log('Delete clicked')}
        isSaving={true}
        isDeleting={false}
        canSave={true}
      />
    </div>
  );
};

ModalActionsLoading.storyName = 'TaskModalActions - Loading';
ModalActionsLoading.parameters = {
  docs: {
    story: 'Action buttons with loading states (saving in progress).',
  },
};

export const ModalActionsDisabled = () => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>TaskModalActions - Disabled Save</h3>
      <TaskModalActions
        mode="edit"
        onClose={() => console.log('Close clicked')}
        onSave={() => console.log('Save clicked')}
        onDelete={() => console.log('Delete clicked')}
        isSaving={false}
        isDeleting={false}
        canSave={false}
      />
    </div>
  );
};

ModalActionsDisabled.storyName = 'TaskModalActions - Disabled Save';
ModalActionsDisabled.parameters = {
  docs: {
    story: 'Action buttons with save disabled (e.g., when title is empty).',
  },
}; 