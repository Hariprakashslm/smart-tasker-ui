// src/ui/common/NotificationDropdown.tsx
import React from 'react';
import './NotificationDropdown.css';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import type { NotificationDropdownProps } from './types';

export const NotificationDropdown: React.FC<NotificationDropdownProps> = ({
  notifications,
  onMarkAllRead,
  onViewAll,
}) => {
  return (
    <div className="notification-dropdown">
      <div className="notification-dropdown-header">
        <span>Notifications</span>
        {onMarkAllRead && (
          <button className="dropdown-action" onClick={onMarkAllRead}>
            Mark all as read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className="notification-empty">🎉 You're all caught up</div>
      ) : (
        <div className="notification-list">
          {notifications.map((n) => (
            <NotificationItem key={n.id} {...n} />
          ))}
        </div>
      )}

      {onViewAll && (
        <div className="notification-footer">
          <button className="dropdown-action" onClick={onViewAll}>
            View all notifications
          </button>
        </div>
      )}
    </div>
  );
};
