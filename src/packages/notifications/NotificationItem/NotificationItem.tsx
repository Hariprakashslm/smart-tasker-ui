// src/ui/common/NotificationItem.tsx
import React from 'react';
import './NotificationItem.css';

export interface NotificationItemProps {
  id: string;
  title: string;
  message?: string;
  time?: string; // e.g., '2m ago'
  read?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  message,
  time,
  read = false,
  icon,
  onClick,
}) => {
  return (
    <div
      className={`notification-item ${read ? 'read' : 'unread'}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {icon && <div className="notification-icon">{icon}</div>}
      <div className="notification-content">
        <div className="notification-title">{title}</div>
        {message && <div className="notification-message">{message}</div>}
        {time && <div className="notification-time">{time}</div>}
      </div>
    </div>
  );
};
