// src/ui/common/FileList.tsx
import React from 'react';
import { FileDownloadLink } from '../FileDownloadLink';
import './FileList.css';
import type { FileListItem, FileListProps } from './types';

export const FileList: React.FC<FileListProps> = ({
  files,
  maxHeight = 'auto',
}) => {
  if (!files.length) {
    return <div className="file-list-empty">No files available.</div>;
  }

  return (
    <div className="file-list-wrapper" style={{ maxHeight }}>
      <ul className="file-list">
        {files.map((file, i) => (
          <li key={i} className="file-list-item">
            <FileDownloadLink {...file} />
          </li>
        ))}
      </ul>
    </div>
  );
};
