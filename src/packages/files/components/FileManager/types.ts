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