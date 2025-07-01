// src/ui-stories/uploads/FileUploader.stories.tsx
import React from 'react';
import { FileUploader } from 'uploads/components/FileUploader';

export default {
  title: 'Packages/Uploads/FileUploader',
  component: FileUploader,
};

export const Default = () => (
  <FileUploader
    label="Upload Files"
    onUpload={(files) => {
      alert(
        `Uploading ${files.length} file(s):\n` +
          files.map((f) => f.name).join('\n')
      );
    }}
  />
);

export const OnlyImages = () => (
  <FileUploader
    label="Upload Images"
    accept="image/*"
    onUpload={(files) => {
      alert('Image upload:\n' + files.map((f) => f.name).join(', '));
    }}
  />
);

export const SinglePDF = () => (
  <FileUploader
    label="Upload PDF"
    multiple={false}
    accept=".pdf"
    onUpload={(files) => {
      alert(`Uploading PDF: ${files[0]?.name}`);
    }}
  />
);
