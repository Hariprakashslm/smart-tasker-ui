import React from 'react';
import './Avatar.css';
import type { AvatarProps } from './types';

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  name = '',
  size = 'medium',
  shape = 'circle',
  showStatus = false,
  status = 'offline',
}) => {
  const getInitials = () => name?.charAt(0).toUpperCase() ?? '?';

  return (
    <div className={`avatar avatar-${size} avatar-${shape}`}>
      {src ? (
        <img src={src} alt={alt || name} className="avatar-image" />
      ) : (
        <span className="avatar-fallback">{getInitials()}</span>
      )}
      {showStatus && <span className={`avatar-status ${status}`} />}
    </div>
  );
};
