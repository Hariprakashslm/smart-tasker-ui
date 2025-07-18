import React from 'react';
import { CommentThread, CommentItem } from '@tasks/CommentThread';
import './TaskCommentsTab.css';

export interface TaskCommentsTabProps {
  mode: 'create' | 'edit' | 'view';
  onAddComment?: (comment: CommentItem) => Promise<void>;
  initialComments?: CommentItem[];
}

export const TaskCommentsTab: React.FC<TaskCommentsTabProps> = ({
  mode,
  onAddComment,
  initialComments = [],
}) => {
  const isReadOnly = mode === 'view';

  return (
    <div className="task-comments-tab">
      {onAddComment && (
        <CommentThread
          initialComments={initialComments}
          onNewComment={onAddComment}
        />
      )}
    </div>
  );
}; 