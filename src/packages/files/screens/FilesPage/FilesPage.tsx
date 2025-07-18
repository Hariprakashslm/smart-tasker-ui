import React from 'react';
import { FileManager, FileItem } from '@files/FileManager';
import './FilesPage.css';

export interface FilesPageProps {
  files: FileItem[];
  onUpload?: () => void;
  onDeleteFile?: (id: string) => void;
  onDownloadFile?: (id: string) => void;
}

export const FilesPage: React.FC<FilesPageProps> = ({
  files,
  onUpload,
  onDeleteFile,
  onDownloadFile,
}) => {
  // Map file actions to FileManager
  const mappedFiles = files.map((file) => ({
    ...file,
    onDelete: () => onDeleteFile?.(file.id),
    onDownload: () => onDownloadFile?.(file.id),
  }));

  return (
    <div className="files-page">
      <div className="files-header">
        <h1 className="files-title">Files & Attachments</h1>
        {onUpload && (
          <button className="upload-btn" onClick={onUpload} type="button">
            Upload File
          </button>
        )}
      </div>
      <FileManager files={mappedFiles} />
    </div>
  );
}; 