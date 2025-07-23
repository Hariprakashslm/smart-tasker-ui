export interface FilePreviewProps {
  fileName: string;
  fileUrl: string;
  fileType?: string;
  onDownload?: () => void;
} 