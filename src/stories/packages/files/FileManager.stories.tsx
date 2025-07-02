// src/stories/files/FileManager.stories.tsx
import React from 'react';
import { FileManager } from '@files/FileManager';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FileManager> = {
  title: 'Packages/Files/FileManager',
  component: FileManager,
};

export default meta;

type Story = StoryObj<typeof FileManager>;

export const Default: Story = {
  args: {
    files: [
      {
        id: '1',
        name: 'ProjectPlan.docx',
        type: 'doc',
        size: '230 KB',
        uploadedAt: '2025-06-01',
        onDownload: () => alert('Downloading...'),
        onDelete: () => alert('Deleted'),
      },
      {
        id: '2',
        name: 'Screenshot.png',
        type: 'image',
        size: '540 KB',
        uploadedAt: '2025-06-15',
        onDownload: () => alert('Downloading...'),
        onDelete: () => alert('Deleted'),
      },
    ],
  },
};
