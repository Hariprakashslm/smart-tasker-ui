import type { Attachment } from '../../types';

export interface TaskAttachmentsTabProps {
  attachments: Attachment[];
  mode: 'create' | 'edit' | 'view';
  onUploadAttachment?: (file: File) => Promise<Attachment>;
  onRemoveAttachment?: (attachmentId: string) => Promise<void>;
  maxFileSize?: number;
  allowedFileTypes?: string[];
} 