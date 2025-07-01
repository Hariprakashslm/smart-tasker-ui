// src/ui-stories/tasks/TaskModal.stories.tsx
import React, { useState } from 'react';
import { TaskModal } from 'tasks/components/TaskModal';

export default {
  title: 'Packages/Tasks/TaskModal',
  component: TaskModal,
};

const allAssignees = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
];

const availableLabels = [
  { label: 'Bug', value: 'bug', color: '#f44336' },
  { label: 'Feature', value: 'feature', color: '#2196f3' },
];

const attachments = [
  {
    name: 'screenshot.png',
    url: 'https://via.placeholder.com/100',
    type: 'image/png',
  },
  {
    name: 'doc.pdf',
    url: 'https://example.com/sample.pdf',
    type: 'application/pdf',
  },
];

export const Default = () => {
  const [open, setOpen] = useState(true);

  return (
    <TaskModal
      isOpen={open}
      onClose={() => setOpen(false)}
      initialData={{
        title: 'Fix login bug',
        description: 'There’s a bug on the login redirect flow',
        assignee: '1',
        labels: ['bug'],
        dueDate: '2025-06-30',
        attachments,
      }}
      allAssignees={allAssignees}
      availableLabels={availableLabels}
      onSave={(data) => console.log('Saved task', data)}
      onAddComment={(text) => console.log('New comment:', text)}
    />
  );
};
