// src/ui/tasks/TypingIndicator.tsx
import React from 'react';
import './TypingIndicator.css';

export interface TypingIndicatorProps {
  usersTyping: string[]; // e.g., ['Hari', 'Jane']
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  usersTyping,
}) => {
  if (usersTyping.length === 0) return null;

  const text =
    usersTyping.length === 1
      ? `${usersTyping[0]} is typing...`
      : `${usersTyping.slice(0, 2).join(', ')}${
          usersTyping.length > 2 ? ' and others' : ''
        } are typing...`;

  return (
    <div className="typing-indicator">
      <div className="typing-text">{text}</div>
      <div className="typing-dots">
        <span className="dot dot1"></span>
        <span className="dot dot2"></span>
        <span className="dot dot3"></span>
      </div>
    </div>
  );
};
