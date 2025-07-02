// src/ui/tasks/CommentThread.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CommentThread, CommentItem } from '@tasks/CommentThread';

const meta: Meta<typeof CommentThread> = {
  title: 'Tasks/CommentThread',
  component: CommentThread,
};

export default meta;

const mockComments: CommentItem[] = [
  {
    id: '1',
    userName: 'Alice Johnson',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=1',
    text: 'Can we finalize this design by today?',
    timestamp: '2025-07-02 10:30 AM',
  },
  {
    id: '2',
    userName: 'Bob Smith',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=2',
    text: 'Yes, I’ve already reviewed it.',
    timestamp: '2025-07-02 11:15 AM',
  },
];

type Story = StoryObj<typeof CommentThread>;

export const Default: Story = {
  args: {
    initialComments: mockComments,
    currentUserAvatarUrl: 'https://i.pravatar.cc/150?img=5',
    onNewComment: (comment) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Comment submitted:', comment);
          resolve();
        }, 3000);
      });
    },
  },
};
