import React, { useState } from 'react';
import { AttachmentPreview } from '@tasks/AttachmentPreview';

export default {
  title: 'Packages/Tasks/AttachmentPreview',
  component: AttachmentPreview,
};

const sampleAttachments = [
  {
    name: 'photo.jpg',
    url: 'https://via.placeholder.com/100x100.png?text=Photo',
    type: 'image/jpeg',
    size: 102400,
  },
  {
    name: 'document.pdf',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    type: 'application/pdf',
    size: 204800,
  },
  {
    name: 'report.docx',
    url: 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.docx',
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    size: 51200,
  },
  {
    name: 'archive.zip',
    url: 'https://file-examples.com/wp-content/uploads/2017/02/zip_2MB.zip',
    type: 'application/zip',
    size: 2097152,
  },
  {
    name: 'music.mp3',
    url: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
    type: 'audio/mpeg',
    size: 700000,
  },
  {
    name: 'video.mp4',
    url: 'https://file-examples.com/wp-content/uploads/2018/04/file_example_MP4_480_1_5MG.mp4',
    type: 'video/mp4',
    size: 1500000,
  },
  {
    name: 'spreadsheet.xlsx',
    url: 'https://file-examples.com/wp-content/uploads/2017/02/file_example_XLSX_100.xlsx',
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    size: 100000,
  },
];

export const Default = () => (
  <div style={{ maxWidth: 800 }}>
    <AttachmentPreview attachments={sampleAttachments.slice(0, 3)} />
  </div>
);

Default.storyName = 'Default (3 files)';

export const WithRemove = () => {
  const [attachments, setAttachments] = useState(sampleAttachments.slice(0, 4));
  return (
    <div style={{ maxWidth: 800 }}>
      <AttachmentPreview
        attachments={attachments}
        onRemove={idx => setAttachments(attachments.filter((_, i) => i !== idx))}
      />
    </div>
  );
};
WithRemove.storyName = 'With Remove Button';

export const ManyFilesHorizontalScroll = () => (
  <div style={{ maxWidth: 600 }}>
    <AttachmentPreview attachments={sampleAttachments} />
  </div>
);
ManyFilesHorizontalScroll.storyName = 'Horizontal Scroll (Many Files)';

export const ResponsiveMobile = () => (
  <div style={{ maxWidth: 350 }}>
    <AttachmentPreview attachments={sampleAttachments.slice(0, 4)} />
    <div style={{ fontSize: 12, color: '#888', marginTop: 8 }}>
      Resize the preview to see vertical stacking on mobile.
    </div>
  </div>
);
ResponsiveMobile.storyName = 'Responsive (Mobile/Stacked)';
