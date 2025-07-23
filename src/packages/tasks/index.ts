import { CalendarViewPage } from './screens/CalendarViewPage';
import { MyTasksPage } from './screens/MyTasksPage';
import { TaskDetailsPage } from './screens/TaskDetailsPage/TaskDetailsPage';

export { AssigneeDropdown } from './components/AssigneeDropdown';
export { AttachmentPreview } from './components/AttachmentPreview';
export { CommentBox } from './components/CommentBox';
export { DueDatePicker } from './components/DueDatePicker';
export { LabelSelector } from './components/LabelSelector';
export { TaskCard } from './components/TaskCard';
export { TaskForm } from './components/TaskForm';
export { TaskHistory } from './components/TaskHistory';
export { TaskModal } from './components/TaskModal';

export const screens = {
  CalendarViewPage,
  MyTasksPage,
  TaskDetailsPage,
};

// Type exports
export type { TaskDependency, Attachment, TaskData, TaskFormData, TaskModalProps } from './components/TaskModal/types';
export type { TaskCardProps } from './components/TaskCard/types';
export type { TaskDetailsModalProps } from './components/TaskDetailsModal/types';
export type { TaskFormProps } from './components/TaskForm/types';
export type { LabelOption, LabelSelectorProps } from './components/LabelSelector/types';
export type { HistoryItem, TaskHistoryProps } from './components/TaskHistory/types';
export type { CommentItem, CommentThreadProps } from './components/CommentThread/types';
export type { CommentBoxProps } from './components/CommentBox/types';
export type { FileTypeIcons, AttachmentPreviewProps } from './components/AttachmentPreview/types';
export type { Assignee, AssigneeDropdownProps } from './components/AssigneeDropdown/types';
export type { DueDateInputProps } from './components/DueDatePicker/types';
export type { TaskDetailsTabProps } from './components/TaskModal/components/TaskDetailsTab/types';
export type { TaskAttachmentsTabProps } from './components/TaskModal/components/TaskAttachmentsTab/types';
export type { TaskCommentsTabProps } from './components/TaskModal/components/TaskCommentsTab/types';
export type { TaskDependenciesTabProps } from './components/TaskModal/components/TaskDependenciesTab/types';
export type { TaskDetailsPageProps } from './screens/TaskDetailsPage/types';
export type { CalendarEvent, CalendarViewPageProps } from './screens/CalendarViewPage/types';
export type { MyTasksPageProps } from './screens/MyTasksPage/types';
