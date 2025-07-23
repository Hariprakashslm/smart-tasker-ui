// src/ui/common/NotificationBell.tsx
import React from 'react';
import './NotificationBell.css';
import type { NotificationBellProps } from './types';

export const NotificationBell: React.FC<NotificationBellProps> = ({
  count = 0,
  onClick,
  tooltip = 'Notifications',
}) => {
  return (
    <button
      className="notification-bell"
      onClick={onClick}
      title={tooltip}
      aria-label="Notifications"
    >
      <span className="bell-icon">🔔</span>
      {count > 0 && (
        <span className="notification-badge">{count > 99 ? '99+' : count}</span>
      )}
    </button>
  );
};
