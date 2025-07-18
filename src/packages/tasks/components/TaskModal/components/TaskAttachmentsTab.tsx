import React, { useRef, useCallback, useState } from 'react';
import { AttachmentPreview } from '@tasks/AttachmentPreview';
import { Attachment } from '../types';
import './TaskAttachmentsTab.css';

export interface TaskAttachmentsTabProps {
  attachments: Attachment[];
  mode: 'create' | 'edit' | 'view';
  onUploadAttachment?: (file: File) => Promise<Attachment>;
  onRemoveAttachment?: (attachmentId: string) => Promise<void>;
  maxFileSize?: number;
  allowedFileTypes?: string[];
}

export const TaskAttachmentsTab: React.FC<TaskAttachmentsTabProps> = ({
  attachments,
  mode,
  onUploadAttachment,
  onRemoveAttachment,
  maxFileSize = 10 * 1024 * 1024, // 10MB
  allowedFileTypes = ['image/*', 'application/pdf', 'text/*'],
}) => {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = useCallback(async (files: FileList | null) => {
    if (!files || !onUploadAttachment) return;

    const fileArray = Array.from(files);
    const validFiles = fileArray.filter(file => {
      if (file.size > maxFileSize) {
        console.error(`File ${file.name} is too large. Maximum size is ${Math.round(maxFileSize / 1024 / 1024)}MB`);
        return false;
      }
      return true;
    });

    for (const file of validFiles) {
      try {
        await onUploadAttachment(file);
      } catch (err) {
        console.error(`Failed to upload ${file.name}`);
      }
    }
  }, [onUploadAttachment, maxFileSize]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  }, [handleFileUpload]);

  const isReadOnly = mode === 'view';

  return (
    <div className="task-attachments-tab">
      {attachments.length > 0 && (
        <div className="task-attachments-list">
          <h4>Current Attachments</h4>
          <AttachmentPreview attachments={attachments} />
        </div>
      )}

      {!isReadOnly && onUploadAttachment && (
        <div
          className={`task-upload-area ${dragOver ? 'drag-over' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="task-upload-content">
            <div className="task-upload-icon">📎</div>
            <p>Drag and drop files here or click to browse</p>
            <p className="task-upload-hint">
              Max file size: {Math.round(maxFileSize / 1024 / 1024)}MB
            </p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={allowedFileTypes.join(',')}
            onChange={(e) => handleFileUpload(e.target.files)}
            style={{ display: 'none' }}
          />
        </div>
      )}
    </div>
  );
}; 