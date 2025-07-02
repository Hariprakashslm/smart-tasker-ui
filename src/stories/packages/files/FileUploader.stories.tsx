// src/ui-stories/files/FileUploader.stories.tsx
import React from 'react';
import { FileUploader } from 'files/FileUploader';

export default {
  title: 'Packages/Files/FileUploader',
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
