import React from 'react';
import { NotificationItem } from '../../components/NotificationItem/NotificationItem';
import './NotificationsCenterPage.css';
import type { NotificationsCenterPageProps } from './types';

export const NotificationsCenterPage: React.FC<NotificationsCenterPageProps> = ({
  notifications,
  onMarkRead,
  onClearAll,
}) => {
  return (
    <div className="notifications-center-page">
      <div className="notifications-header">
        <h1 className="notifications-title">Notifications</h1>
        {onClearAll && (
          <button className="clear-all-btn" onClick={onClearAll} type="button">
            Clear All
          </button>
        )}
      </div>
      <div className="notifications-list">
        {notifications.length === 0 ? (
          <div className="notifications-empty">No notifications</div>
        ) : (
          notifications.map((n) => (
            <NotificationItem
              key={n.id}
              {...n}
              onClick={() => onMarkRead?.(n.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}; 