export interface Attachment {
  name: string;
  url: string;
  type: string;
  size?: number;
}

export interface FileTypeIcons {
  [key: string]: React.ReactNode;
}

export interface AttachmentPreviewProps {
  attachments: Attachment[];
  onRemove?: (index: number) => void;
  fileTypeIcons?: FileTypeIcons;
  downloadLabel?: string;
  removeLabel?: string;
  thumbnailSize?: number;
  className?: string;
} 