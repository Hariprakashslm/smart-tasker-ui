// src/ui-stories/common/FileDownloadLink.stories.tsx
import React from 'react';
import { FileDownloadLink } from '@files/FileDownloadLink';

export default {
  title: 'Packages/Files/FileDownloadLink',
  component: FileDownloadLink,
};

export const ViewPDF = () => (
  <FileDownloadLink
    fileName="report.pdf"
    fileUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  />
);

export const DownloadImage = () => (
  <FileDownloadLink
    fileName="logo.png"
    fileUrl="https://via.placeholder.com/150"
    download
  />
);

export const ViewTextFile = () => (
  <FileDownloadLink
    fileName="notes.txt"
    fileUrl="https://example.com/notes.txt"
  />
);

export const LongFileName = () => (
  <div style={{ maxWidth: 240 }}>
    <FileDownloadLink
      fileName="very_long_file_name_that_needs_to_be_truncated_because_it_does_not_fit.txt"
      fileUrl="https://example.com/longname.txt"
    />
  </div>
);
