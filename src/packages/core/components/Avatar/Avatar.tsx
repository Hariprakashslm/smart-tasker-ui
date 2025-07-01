import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square';
  showStatus?: boolean;
  status?: 'online' | 'offline';
}

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
