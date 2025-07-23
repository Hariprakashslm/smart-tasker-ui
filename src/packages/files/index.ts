import { FilesPage } from './screens/FilesPage';

export { FileDownloadLink } from './components/FileDownloadLink';
export { FilePreview } from './components/FilePreview';
export { FileUploader } from './components/FileUploader';
export { FileList } from './components/FileList';

export type { FileDownloadLinkProps } from './components/FileDownloadLink/types';
export type { FileListItem, FileListProps } from './components/FileList/types';
export type {
  FileItem,
  FileManagerProps,
} from './components/FileManager/types';
export type { FilePreviewProps } from './components/FilePreview/types';
export type { FileUploaderProps } from './components/FileUploader/types';
export type { FilesPageProps } from './screens/FilesPage/types';

export const screens = {
  FilesPage,
};
