import React from 'react';
import { FileManager } from '@files/FileManager';
import './FilesPage.css';
import { FilesPageProps } from './types';

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
