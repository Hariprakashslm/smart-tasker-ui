import type { CommentItem } from '@tasks/CommentThread/types';

export interface TaskCommentsTabProps {
  mode: 'create' | 'edit' | 'view';
  onAddComment?: (comment: CommentItem) => Promise<void>;
  initialComments?: CommentItem[];
} 