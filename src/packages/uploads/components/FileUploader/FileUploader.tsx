// src/uploads/FileUploader.tsx
import React, { useRef } from 'react';
import './FileUploader.css';

export interface FileUploaderProps {
  onUpload: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  label?: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  onUpload,
  multiple = true,
  accept = '*/*',
  label = 'Upload Files',
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      onUpload(files);
    }
  };

  return (
    <div className="file-uploader">
      <button
        className="file-uploader-button"
        onClick={() => inputRef.current?.click()}
      >
        {label}
      </button>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        multiple={multiple}
        accept={accept}
      />
    </div>
  );
};
