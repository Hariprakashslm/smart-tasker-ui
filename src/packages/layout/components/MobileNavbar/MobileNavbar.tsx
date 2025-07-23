// src/ui/layout/MobileNavbar.tsx
import React from 'react';
import './MobileNavbar.css';
import { Avatar } from '@core/Avatar';
import type { MobileNavbarProps } from './types';

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  title = 'Smart Tasker',
  onMenuToggle,
  onAvatarClick,
  user,
}) => {
  return (
    <div className="mobile-navbar">
      <button
        className="mobile-menu-btn"
        onClick={onMenuToggle}
        aria-label="Menu"
      >
        ☰
      </button>

      <span className="mobile-title">{title}</span>

      {user && (
        <button onClick={onAvatarClick} className="mobile-avatar-btn">
          <Avatar name={user.name} src={user.imageUrl} size={'small'} />
        </button>
      )}
    </div>
  );
};
