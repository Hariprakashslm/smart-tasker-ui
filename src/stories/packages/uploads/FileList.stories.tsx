// src/ui-stories/common/FileList.stories.tsx
import React from 'react';
import { FileList } from 'uploads/FileList';

export default {
  title: 'Packages/Uploads/FileList',
  component: FileList,
};

const files = [
  {
    fileName: 'proposal.pdf',
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    fileName: 'team-photo.jpg',
    fileUrl: 'https://via.placeholder.com/150',
    download: true,
  },
  {
    fileName: 'notes.txt',
    fileUrl: 'https://example.com/notes.txt',
  },
  {
    fileName: 'archive_2023_backup_config_longname.json',
    fileUrl: 'https://example.com/archive.json',
  },
];

export const Default = () => (
  <div style={{ padding: 24, maxWidth: 500 }}>
    <FileList files={files} maxHeight="220px" />
  </div>
);

export const Empty = () => (
  <div style={{ padding: 24 }}>
    <FileList files={[]} />
  </div>
);
