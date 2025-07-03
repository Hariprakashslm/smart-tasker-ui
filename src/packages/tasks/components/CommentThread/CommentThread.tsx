// src/ui/tasks/CommentThread.tsx
import React, { useState } from 'react';
import './CommentThread.css';
import { CommentBox } from '../CommentBox';

export interface CommentItem {
  id: string;
  userName: string;
  userAvatarUrl?: string;
  text: string;
  timestamp: string; // Format: "2 hours ago" or Date.toLocaleString()
}

export interface CommentThreadProps {
  initialComments: CommentItem[];
  currentUserAvatarUrl?: string;
  onNewComment?: (comment: CommentItem) => Promise<void>;
}

export const CommentThread: React.FC<CommentThreadProps> = ({
  initialComments,
  currentUserAvatarUrl,
  onNewComment,
}) => {
  const [comments, setComments] = useState<CommentItem[]>(initialComments);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const handleAddComment = async (text: string) => {
    const newComment: CommentItem = {
      id: `${Date.now()}`,
      userName: 'You', // Optional: Replace with real user name
      userAvatarUrl: currentUserAvatarUrl,
      text,
      timestamp: new Date().toLocaleString(),
    };
    setIsSubmitting(true);
    await onNewComment?.(newComment);
    setIsSubmitting(false);
    setComments([...comments, newComment]);
  };

  return (
    <div className="comment-thread">
      <div className="previous-comments">
        <CommentBox
          onSubmit={handleAddComment}
          userAvatarUrl={currentUserAvatarUrl}
          isSubmitting={isSubmitting}
        />
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            {comment.userAvatarUrl && (
              <img
                src={comment.userAvatarUrl}
                alt={comment.userName}
                className="comment-avatar"
              />
            )}
            <div className="comment-content">
              <div className="comment-meta">
                <span className="comment-user">{comment.userName}</span>
                <span className="comment-time">{comment.timestamp}</span>
              </div>
              <div className="comment-text">{comment.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
