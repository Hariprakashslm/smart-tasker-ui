// src/ui-stories/packages/tasks/TaskDetailsModal.stories.tsx
import React, { useState } from 'react';
import { TaskDetailsModal } from './TaskDetailsModal';

export default {
  title: 'Tasks/TaskDetailsModal',
  component: TaskDetailsModal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <TaskDetailsModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      task={{
        id: '1',
        title: 'Fix login bug',
        description: 'Login with Google is not working in staging.',
        status: 'in-progress',
        dueDate: '2025-07-05',
        assignee: {
          name: 'Alice',
          imageUrl: 'https://i.pravatar.cc/150?img=5',
        },
        attachments: [
          {
            name: 'screenshot.png',
            url: 'https://via.placeholder.com/100',
            type: 'image/png',
          },
          {
            name: 'report.pdf',
            url: 'https://example.com/sample.pdf',
            type: 'application/pdf',
          },
        ],
        comments: ['Initial issue reported by QA.'],
      }}
    />
  );
};
