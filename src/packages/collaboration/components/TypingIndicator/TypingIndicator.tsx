// src/packages/collaboration/TypingIndicator.tsx
import React from 'react';
import './TypingIndicator.css';
import { Avatar } from '@core/Avatar';

export interface TypingUser {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface TypingIndicatorProps {
  users: TypingUser[];
  maxAvatars?: number;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  users,
  maxAvatars = 3,
}) => {
  if (users.length === 0) return null;

  const visible = users.slice(0, maxAvatars);
  const remaining = users.length - visible.length;

  const names = users.map((u) => u.name);
  const displayText =
    names.length === 1
      ? `${names[0]} is typing...`
      : names.length === 2
      ? `${names[0]} and ${names[1]} are typing...`
      : `${names[0]}, ${names[1]} and ${names.length - 2} others are typing...`;

  return (
    <div className="typing-indicator">
      <div className="typing-avatars">
        {visible.map((user) => (
          <Avatar
            key={user.id}
            name={user.name}
            src={user.avatarUrl}
            size={'medium'}
          />
        ))}
        {remaining > 0 && <div className="typing-more">+{remaining}</div>}
      </div>
      <div className="typing-text">
        {displayText} <span className="typing-dots">...</span>
      </div>
    </div>
  );
};
