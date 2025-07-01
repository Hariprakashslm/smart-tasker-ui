// src/ui/common/FilePreview.tsx
import React from 'react';
import './FilePreview.css';
import { Button } from 'core/components/Button';

export interface FilePreviewProps {
  fileName: string;
  fileUrl: string;
  fileType?: string; // 'image' | 'pdf' | 'txt' | 'other'
  onDownload?: () => void;
}

export const FilePreview: React.FC<FilePreviewProps> = ({
  fileName,
  fileUrl,
  fileType = getFileType(fileName),
  onDownload,
}) => {
  const isImage = fileType === 'image';

  return (
    <div className="file-preview">
      <div className="file-thumb">
        {isImage ? (
          <img src={fileUrl} alt={fileName} className="file-image" />
        ) : (
          <div className="file-icon">{getIcon(fileType)}</div>
        )}
      </div>
      <div className="file-details">
        <div className="file-name" title={fileName}>
          {fileName}
        </div>
        <Button
          label="Download"
          variant="outline"
          size="small"
          onClick={onDownload || (() => window.open(fileUrl, '_blank'))}
        />
      </div>
    </div>
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
    case 'pdf':
      return '📄';
    case 'txt':
      return '📃';
    case 'other':
      return '📁';
    default:
      return '📎';
  }
}
