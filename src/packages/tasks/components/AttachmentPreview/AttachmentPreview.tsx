// src/ui/tasks/AttachmentPreview.tsx
import React from 'react';
import './AttachmentPreview.css';

export interface Attachment {
  name: string;
  url: string;
  type: string; // MIME type (e.g., image/jpeg, application/pdf)
  size?: number; // in bytes
}

export interface FileTypeIcons {
  [key: string]: React.ReactNode;
}

export interface AttachmentPreviewProps {
  attachments: Attachment[];
  onRemove?: (index: number) => void;
  fileTypeIcons?: FileTypeIcons;
  downloadLabel?: string;
  removeLabel?: string;
  thumbnailSize?: number;
  className?: string;
}

const DEFAULT_ICONS: FileTypeIcons = {
  pdf: <span role="img" aria-label="PDF" className="attachment-fileicon">📄</span>,
  zip: <span role="img" aria-label="Archive" className="attachment-fileicon">🗜️</span>,
  doc: <span role="img" aria-label="Word document" className="attachment-fileicon">📝</span>,
  docx: <span role="img" aria-label="Word document" className="attachment-fileicon">📝</span>,
  xls: <span role="img" aria-label="Excel document" className="attachment-fileicon">📊</span>,
  xlsx: <span role="img" aria-label="Excel document" className="attachment-fileicon">📊</span>,
  ppt: <span role="img" aria-label="PowerPoint" className="attachment-fileicon">📈</span>,
  pptx: <span role="img" aria-label="PowerPoint" className="attachment-fileicon">📈</span>,
  mp3: <span role="img" aria-label="Audio" className="attachment-fileicon">🎵</span>,
  mp4: <span role="img" aria-label="Video" className="attachment-fileicon">🎬</span>,
  jpg: <span role="img" aria-label="Image" className="attachment-fileicon">🖼️</span>,
  jpeg: <span role="img" aria-label="Image" className="attachment-fileicon">🖼️</span>,
  png: <span role="img" aria-label="Image" className="attachment-fileicon">🖼️</span>,
  gif: <span role="img" aria-label="Image" className="attachment-fileicon">🖼️</span>,
  default: <span role="img" aria-label="File" className="attachment-fileicon">📄</span>,
};

function formatBytes(bytes?: number): string {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function getFileIcon(type: string, name: string, icons: FileTypeIcons): React.ReactNode {
  if (type.startsWith('image/')) return null;
  const ext = name.split('.').pop()?.toLowerCase() || '';
  return icons[ext] || icons[type.split('/')[1]] || icons.default;
}

export const AttachmentPreview: React.FC<AttachmentPreviewProps> = ({
  attachments,
  onRemove,
  fileTypeIcons = DEFAULT_ICONS,
  downloadLabel = 'Download',
  removeLabel = 'Remove',
  thumbnailSize = 54,
  className = '',
}) => {
  const isImage = (type: string) => type.startsWith('image/');
  return (
    <div className={["attachment-preview", className].filter(Boolean).join(' ')} role="list">
      {attachments.map((file, index) => (
        <div className="attachment-item" key={index} role="listitem" tabIndex={0} aria-label={`Attachment: ${file.name}`}>
          {onRemove && (
            <button
              type="button"
              className="attachment-remove"
              aria-label={`${removeLabel} ${file.name}`}
              onClick={() => onRemove(index)}
              tabIndex={0}
            >
              ✕
            </button>
          )}
          <div className="attachment-thumbwrap" style={{ width: thumbnailSize, height: thumbnailSize }}>
            {isImage(file.type) ? (
              <img
                src={file.url}
                alt={file.name}
                className="attachment-thumbnail"
                loading="lazy"
                style={{ width: thumbnailSize, height: thumbnailSize }}
                onError={e => (e.currentTarget.src = 'data:image/svg+xml,%3Csvg width=\'48\' height=\'48\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23eee\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'%23999\' font-size=\'18\'%3Eimg%3C/text%3E%3C/svg%3E')}
              />
            ) : (
              getFileIcon(file.type, file.name, fileTypeIcons)
            )}
          </div>
          <div className="attachment-info">
            <div className="attachment-name" title={file.name}>{file.name}</div>
            <div className="attachment-meta">
              {file.size && <span className="attachment-size">{formatBytes(file.size)}</span>}
              <span className="attachment-type">{file.type.split('/')[1] || 'file'}</span>
            </div>
            <a
              href={file.url}
              download
              className="attachment-download"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${downloadLabel} ${file.name}`}
              tabIndex={0}
            >
              <span className="attachment-download-icon" role="img" aria-label="Download">⬇️</span> {downloadLabel}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
