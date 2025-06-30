// src/ui/common/FileDownloadLink.tsx
import React from 'react';
import './FileDownloadLink.css';

export interface FileDownloadLinkProps {
  fileName: string;
  fileUrl: string;
  download?: boolean; // if true, triggers browser download
  fileType?: string; // auto-detect from fileName if not provided
}

export const FileDownloadLink: React.FC<FileDownloadLinkProps> = ({
  fileName,
  fileUrl,
  download = false,
  fileType = getFileType(fileName),
}) => {
  return (
    <a
      href={fileUrl}
      className="file-download-link"
      target={download ? '_self' : '_blank'}
      rel="noopener noreferrer"
      download={download}
      title={fileName}
    >
      <span className="file-icon">{getIcon(fileType)}</span>
      <span className="file-text">{fileName}</span>
    </a>
  );
};

function getFileType(name: string): string {
  const ext = name.split('.').pop()?.toLowerCase();
  if (!ext) return 'other';
  if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)) return 'image';
  if (ext === 'pdf') return 'pdf';
  if (ext === 'txt') return 'txt';
  return 'other';
}

function getIcon(type: string) {
  switch (type) {
    case 'image':
      return '🖼️';
    case 'pdf':
      return '📄';
    case 'txt':
      return '📃';
    default:
      return '📁';
  }
}
