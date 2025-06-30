// src/ui/tasks/AttachmentPreview.tsx
import React from 'react';
import './AttachmentPreview.css';

export interface Attachment {
  name: string;
  url: string;
  type: string; // MIME type (e.g., image/jpeg, application/pdf)
}

export interface AttachmentPreviewProps {
  attachments: Attachment[];
}

export const AttachmentPreview: React.FC<AttachmentPreviewProps> = ({
  attachments,
}) => {
  const isImage = (type: string) => type.startsWith('image/');

  return (
    <div className="attachment-preview">
      {attachments.map((file, index) => (
        <div className="attachment-item" key={index}>
          {isImage(file.type) ? (
            <img
              src={file.url}
              alt={file.name}
              className="attachment-thumbnail"
            />
          ) : (
            <div className="attachment-icon">📄</div>
          )}

          <div className="attachment-info">
            <div className="attachment-name">{file.name}</div>
            <a
              href={file.url}
              download
              className="attachment-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
