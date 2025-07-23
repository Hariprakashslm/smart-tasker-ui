import React from 'react';
import { FilesPage } from '@screens/files/FilesPage';
import { Meta, StoryObj } from '@storybook/react';
import { FileItem } from '@/packages/files';

const meta: Meta<typeof FilesPage> = {
  title: 'Screens/Files/FilesPage',
  component: FilesPage,
};
export default meta;

type Story = StoryObj<typeof FilesPage>;

const mockFiles: FileItem[] = [
  {
    id: '1',
    name: 'Project Plan.docx',
    type: 'doc',
    size: '120 KB',
    uploadedAt: '2024-07-18',
  },
  {
    id: '2',
    name: 'Screenshot.png',
    type: 'image',
    size: '2.1 MB',
    uploadedAt: '2024-07-17',
  },
  {
    id: '3',
    name: 'Demo Video.mp4',
    type: 'video',
    size: '15 MB',
    uploadedAt: '2024-07-16',
  },
];

export const Default: Story = {
  args: {
    files: mockFiles,
    onDeleteFile: (id: string) => alert('Delete file: ' + id),
    onDownloadFile: (id: string) => alert('Download file: ' + id),
    onUpload: () => alert('Upload file'),
  },
};

export const NoFiles: Story = {
  args: {
    files: [],
    onUpload: () => alert('Upload file'),
  },
};
