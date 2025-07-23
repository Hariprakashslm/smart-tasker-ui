export interface FileListItem {
  fileName: string;
  fileUrl: string;
  download?: boolean;
}

export interface FileListProps {
  files: FileListItem[];
  maxHeight?: string;
} 