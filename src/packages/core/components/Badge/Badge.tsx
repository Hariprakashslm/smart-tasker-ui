import React from 'react';
import './Badge.css';
import type { BadgeProps } from './types';

export const Badge: React.FC<BadgeProps> = ({
  text,
  type = 'default',
  showDot = false,
  children,
  color,
}) => {
  const isHidden = !text && !showDot;

  return (
    <div className="badge-wrapper">
      {children}
      {!isHidden && (
        <span
          className={`badge ${type} ${showDot ? 'dot' : ''}`}
          style={color ? { backgroundColor: color } : {}}
        >
          {!showDot && text}
        </span>
      )}
    </div>
  );
};
