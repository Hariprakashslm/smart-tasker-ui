// src/ui-stories/tasks/AttachmentPreview.stories.tsx
import React from 'react';
import { AttachmentPreview, Attachment } from '@tasks/AttachmentPreview';

export default {
  title: 'Packages/Tasks/AttachmentPreview',
  component: AttachmentPreview,
};

const attachments: Attachment[] = [
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
];

export const Default = () => (
  <div style={{ maxWidth: 400 }}>
    <AttachmentPreview attachments={attachments} />
  </div>
);
