import React from 'react';
import { TaskDetailsPage } from '../../../packages/tasks/screens/TaskDetailsPage/TaskDetailsPage';
import { TaskData } from '../../../packages/tasks/components/TaskModal/types';
import { ActivityItemProps } from '../../../packages/activity/components/ActivityItem/types';

export default {
  title: 'Pages/Tasks/TaskDetailsPage',
  component: TaskDetailsPage,
};

const allAssignees = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Carol' },
];

const availableLabels = [
  { label: 'UI', value: 'UI' },
  { label: 'Frontend', value: 'Frontend' },
  { label: 'Backend', value: 'Backend' },
  { label: 'Bug', value: 'Bug' },
];

const mockTask: TaskData = {
  id: 'task-1',
  title: 'Design login page',
  description: 'Create a modern, responsive login page for the app.',
  assignee: '1',
  labels: ['UI', 'Frontend'],
  dueDate: '2025-07-31',
  priority: 'high',
  status: 'in-progress',
  attachments: [
    {
      id: 'att-1',
      name: 'wireframe.png',
      url: 'https://via.placeholder.com/100x100.png?text=Wireframe',
      type: 'image/png',
      size: 102400,
      uploadedAt: '2025-07-01T10:00:00Z',
    },
    {
      id: 'att-2',
      name: 'requirements.pdf',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      type: 'application/pdf',
      size: 204800,
      uploadedAt: '2025-07-02T12:00:00Z',
    },
  ],
  dependencies: [],
  estimatedHours: 8,
  actualHours: 3,
  tags: ['design', 'login'],
};

const completedTask: TaskData = {
  ...mockTask,
  id: 'task-2',
  title: 'Fix bug in registration',
  status: 'done',
  attachments: [
    {
      id: 'att-3',
      name: 'bugfix.png',
      url: 'https://via.placeholder.com/100x100.png?text=Bugfix',
      type: 'image/png',
      size: 51200,
      uploadedAt: '2025-07-05T09:00:00Z',
    },
  ],
  tags: ['bug', 'registration'],
};

const noAttachmentsTask: TaskData = {
  ...mockTask,
  id: 'task-3',
  title: 'Write API documentation',
  attachments: [],
  tags: ['docs', 'api'],
};

const mockActivity: ActivityItemProps[] = [
  {
    user: 'Alice',
    action: 'created this task',
    timestamp: '2025-07-01T09:00:00Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    user: 'Bob',
    action: 'updated the description',
    timestamp: '2025-07-02T14:30:00Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
  },
  {
    user: 'Carol',
    action: 'attached a file',
    timestamp: '2025-07-03T11:15:00Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  },
];

const noActivity: ActivityItemProps[] = [];

export const Default = () => (
  <TaskDetailsPage
    task={mockTask}
    activity={mockActivity}
    allAssignees={allAssignees}
    availableLabels={availableLabels}
  />
);

Default.storyName = 'Default (with mock data)';

export const CompletedTask = () => (
  <TaskDetailsPage
    task={completedTask}
    activity={mockActivity}
    allAssignees={allAssignees}
    availableLabels={availableLabels}
  />
);
CompletedTask.storyName = 'Completed Task';

export const NoAttachments = () => (
  <TaskDetailsPage
    task={noAttachmentsTask}
    activity={mockActivity}
    allAssignees={allAssignees}
    availableLabels={availableLabels}
  />
);
NoAttachments.storyName = 'No Attachments';

export const NoActivity = () => (
  <TaskDetailsPage
    task={mockTask}
    activity={noActivity}
    allAssignees={allAssignees}
    availableLabels={availableLabels}
  />
);
NoActivity.storyName = 'No Activity'; 