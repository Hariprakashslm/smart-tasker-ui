export interface FileUploaderProps {
  onUpload: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  label?: string;
} 