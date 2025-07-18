# TaskModal Component

A comprehensive, modular task management modal built with React and TypeScript. The TaskModal has been refactored into smaller, focused components for better maintainability and reusability.

## 🏗️ Architecture

The TaskModal is composed of several smaller components, each responsible for a specific aspect of task management:

```
TaskModal/
├── TaskModal.tsx              # Main container component
├── components/
│   ├── TaskModalTabs.tsx      # Tab navigation
│   ├── TaskDetailsTab.tsx     # Task form fields
│   ├── TaskAttachmentsTab.tsx # File upload & management
│   ├── TaskCommentsTab.tsx    # Comments section
│   ├── TaskDependenciesTab.tsx # Dependency management
│   ├── TaskTimeTrackingTab.tsx # Time tracking display
│   ├── TaskHistoryTab.tsx     # Activity history
│   ├── TaskAutoSaveIndicator.tsx # Auto-save status
│   └── TaskModalActions.tsx   # Action buttons
└── index.ts                   # Exports
```

## 🚀 Features

### Core Features
- **Multiple Modes**: Create, edit, and view modes
- **Auto-save**: Automatically saves changes every 30 seconds (configurable)
- **Responsive Design**: Works on all screen sizes
- **Accessibility**: Full keyboard navigation and screen reader support
- **Dark Mode**: Automatic dark mode detection
- **High Contrast**: Support for accessibility preferences
- **Reduced Motion**: Respects user motion preferences

### Task Management
- **Priority Levels**: Low, Medium, High, Urgent
- **Status Tracking**: To Do, In Progress, Done
- **Assignee Management**: Assign tasks to team members
- **Due Date Selection**: Date picker with validation
- **Label System**: Color-coded labels for categorization
- **Time Tracking**: Estimated and actual hours with progress visualization

### File Management
- **Drag & Drop**: Intuitive file upload interface
- **File Validation**: Size and type restrictions
- **Preview Support**: Image and document previews
- **Multiple Files**: Upload multiple files at once

### Collaboration
- **Comments**: Full comment system with threading
- **Dependencies**: Link tasks to other tasks
- **Activity History**: Track all changes made to tasks

## 📦 Components

### TaskModal (Main Component)
The main container that orchestrates all sub-components.

```tsx
import { TaskModal } from '@tasks/TaskModal';

<TaskModal
  isOpen={true}
  mode="edit"
  initialData={taskData}
  onSave={handleSave}
  onClose={handleClose}
  allAssignees={assignees}
  availableLabels={labels}
/>
```

### TaskModalTabs
Handles tab navigation with configurable features.

```tsx
import { TaskModalTabs } from '@tasks/TaskModal';

<TaskModalTabs
  activeTab={activeTab}
  onTabChange={setActiveTab}
  enableDependencies={true}
  enableTimeTracking={true}
/>
```

### TaskDetailsTab
Form fields for task details including title, description, priority, status, assignee, due date, and labels.

```tsx
import { TaskDetailsTab } from '@tasks/TaskModal';

<TaskDetailsTab
  formData={taskData}
  onUpdate={handleUpdate}
  mode="edit"
  allAssignees={assignees}
  availableLabels={labels}
  enableTimeTracking={true}
/>
```

### TaskAttachmentsTab
File upload and attachment management with drag & drop support.

```tsx
import { TaskAttachmentsTab } from '@tasks/TaskModal';

<TaskAttachmentsTab
  attachments={attachments}
  mode="edit"
  onUploadAttachment={handleUpload}
  maxFileSize={10 * 1024 * 1024}
  allowedFileTypes={['image/*', 'application/pdf']}
/>
```

### TaskCommentsTab
Comments section with ability to add new comments.

```tsx
import { TaskCommentsTab } from '@tasks/TaskModal';

<TaskCommentsTab
  mode="edit"
  onAddComment={handleAddComment}
  initialComments={comments}
/>
```

### TaskDependenciesTab
Dependency management with ability to add and remove task dependencies.

```tsx
import { TaskDependenciesTab } from '@tasks/TaskModal';

<TaskDependenciesTab
  dependencies={dependencies}
  availableTasks={availableTasks}
  mode="edit"
  onAddDependency={handleAddDependency}
  onRemoveDependency={handleRemoveDependency}
/>
```

### TaskTimeTrackingTab
Time tracking display with estimated, actual, and remaining hours, plus progress visualization.

```tsx
import { TaskTimeTrackingTab } from '@tasks/TaskModal';

<TaskTimeTrackingTab
  formData={taskData}
/>
```

### TaskHistoryTab
Task activity history showing all changes made to the task.

```tsx
import { TaskHistoryTab } from '@tasks/TaskModal';

<TaskHistoryTab
  taskId="task-123"
/>
```

### TaskAutoSaveIndicator
Auto-save status indicator showing when changes are being saved automatically.

```tsx
import { TaskAutoSaveIndicator } from '@tasks/TaskModal';

<TaskAutoSaveIndicator
  isVisible={hasUnsavedChanges}
/>
```

### TaskModalActions
Action buttons for the task modal with save, cancel, and delete options.

```tsx
import { TaskModalActions } from '@tasks/TaskModal';

<TaskModalActions
  mode="edit"
  onClose={handleClose}
  onSave={handleSave}
  onDelete={handleDelete}
  isSaving={false}
  isDeleting={false}
  canSave={true}
/>
```

## 🎨 Styling

Each component has its own CSS file for modular styling:

- `TaskModal.css` - Main container styles
- `components/*.css` - Individual component styles

### CSS Features
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Automatic theme detection
- **High Contrast**: Accessibility support
- **Reduced Motion**: Respects user preferences
- **Custom Properties**: CSS variables for theming

## 🔧 Configuration

### TaskModal Props

```tsx
interface TaskModalProps {
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
  autoSaveInterval?: number; // Default: 30000ms
  maxFileSize?: number; // Default: 10MB
  allowedFileTypes?: string[]; // Default: ['image/*', 'application/pdf', 'text/*']
  enableRichText?: boolean; // Default: true
  enableDependencies?: boolean; // Default: true
  enableTimeTracking?: boolean; // Default: true
}
```

## 📱 Responsive Design

The TaskModal is fully responsive with breakpoints:

- **Desktop**: Full layout with side-by-side fields
- **Tablet**: Stacked layout with optimized spacing
- **Mobile**: Single column layout with full-width buttons

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and roles
- **Focus Management**: Logical tab order
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects motion preferences
- **Color Blindness**: Color-safe design patterns

## 🧪 Testing

Each component can be tested independently:

```tsx
import { render, screen } from '@testing-library/react';
import { TaskDetailsTab } from '@tasks/TaskModal';

test('TaskDetailsTab renders correctly', () => {
  render(<TaskDetailsTab {...props} />);
  expect(screen.getByLabelText('Title *')).toBeInTheDocument();
});
```

## 📚 Storybook

Comprehensive Storybook stories are available for each component:

```bash
npm run storybook
```

Navigate to "Packages/Tasks/TaskModal Components" to see all component variations.

## 🔄 Migration Guide

### From Monolithic TaskModal

If you're migrating from the old monolithic TaskModal:

1. **Import Changes**: No changes needed - the main TaskModal API remains the same
2. **New Features**: All new features are opt-in via props
3. **Breaking Changes**: None - fully backward compatible

### Using Individual Components

You can now use individual components independently:

```tsx
import { TaskDetailsTab, TaskAttachmentsTab } from '@tasks/TaskModal';

// Use components in your own layouts
<div className="custom-layout">
  <TaskDetailsTab {...props} />
  <TaskAttachmentsTab {...props} />
</div>
```

## 🤝 Contributing

When contributing to the TaskModal:

1. **Component Isolation**: Each component should be self-contained
2. **Props Interface**: Define clear, typed interfaces
3. **CSS Modules**: Use component-specific CSS files
4. **Storybook**: Add stories for new features
5. **Testing**: Write tests for new functionality
6. **Documentation**: Update this README for new features

## 📄 License

This component is part of the Smart Tasker UI library and follows the same license terms. 