// src/ui/tasks/CommentBox.tsx
import React, { useState } from 'react';
import './CommentBox.css';
import { TextArea } from '@core/Textarea';
import { Button } from '@core/Button';

export interface CommentBoxProps {
  onSubmit: (text: string) => void;
  userAvatarUrl?: string;
  placeholder?: string;
  disabled?: boolean;
  isSubmitting?: boolean;
}

export const CommentBox: React.FC<CommentBoxProps> = ({
  onSubmit,
  userAvatarUrl,
  placeholder = 'Write a comment...',
  disabled = false,
  isSubmitting = false,
}) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <div className="comment-box">
      {userAvatarUrl && (
        <img src={userAvatarUrl} alt="User" className="comment-avatar" />
      )}

      <div className="comment-input-area">
        <TextArea
          value={text}
          onChange={(e) => setText(e)}
          placeholder={placeholder}
          disabled={disabled}
        />

        <div className="comment-actions">
          <Button
            primary
            onClick={handleSubmit}
            disabled={!text.trim() || disabled}
            label="Comment"
            isLoading={isSubmitting}
          ></Button>
        </div>
      </div>
    </div>
  );
};
