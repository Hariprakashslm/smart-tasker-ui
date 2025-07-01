// src/ui-stories/common/FilePreview.stories.tsx
import React from 'react';
import { FilePreview } from 'uploads/components/FilePreview';

export default {
  title: 'Packages/Uploads/FilePreview',
  component: FilePreview,
};

export const ImageFile = () => (
  <FilePreview
    fileName="logo.png"
    fileUrl="https://via.placeholder.com/150"
    fileType="image"
  />
);

export const PdfFile = () => (
  <FilePreview
    fileName="report.pdf"
    fileUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    fileType="pdf"
  />
);

export const TextFile = () => (
  <FilePreview
    fileName="notes.txt"
    fileUrl="https://example.com/notes.txt"
    fileType="txt"
  />
);

export const UnknownFile = () => (
  <FilePreview fileName="backup.zip" fileUrl="https://example.com/backup.zip" />
);
