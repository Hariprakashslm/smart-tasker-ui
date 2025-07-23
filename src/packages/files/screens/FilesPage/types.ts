import { FileItem } from '../../components/FileManager/types';

export interface FilesPageProps {
  files: FileItem[];
  onUpload?: () => void;
  onDeleteFile?: (id: string) => void;
  onDownloadFile?: (id: string) => void;
}
