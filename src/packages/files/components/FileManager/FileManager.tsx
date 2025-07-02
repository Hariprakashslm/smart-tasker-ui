// src/ui/files/FileManager.tsx
import React from 'react';
import './FileManager.css';

export interface FileItem {
  id: string;
  name: string;
  type: 'doc' | 'image' | 'video' | 'pdf' | 'zip' | 'other';
  size: string;
  uploadedAt: string;
  onDownload?: () => void;
  onDelete?: () => void;
}

export interface FileManagerProps {
  files: FileItem[];
}

export const FileManager: React.FC<FileManagerProps> = ({ files }) => {
  return (
    <div className="file-manager">
      <h2 className="file-manager-title">File Manager</h2>
      {files.length === 0 ? (
        <p className="file-empty">No files uploaded yet.</p>
      ) : (
        <ul className="file-list">
          {files.map((file) => (
            <li key={file.id} className="file-item">
              <div className="file-icon">{getIcon(file.type)}</div>
              <div className="file-info">
                <div className="file-name">{file.name}</div>
                <div className="file-meta">
                  {file.size} • Uploaded: {file.uploadedAt}
                </div>
              </div>
              <div className="file-actions">
                <button onClick={file.onDownload}>Download</button>
                <button className="delete" onClick={file.onDelete}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const getIcon = (type: FileItem['type']) => {
  switch (type) {
    case 'doc':
      return '📄';
    case 'image':
      return '🖼️';
    case 'video':
      return '🎬';
    case 'pdf':
      return '📕';
    case 'zip':
      return '🗜️';
    default:
      return '📁';
  }
};
