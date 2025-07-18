// src/ui/tasks/ActivityItem.tsx
import React from 'react';
import './ActivityItem.css';
import { ActivityItemProps } from './types';

export const ActivityItem: React.FC<ActivityItemProps> = ({
  user,
  action,
  timestamp,
  avatarUrl,
  icon,
  status = 'info',
  badge,
  onUserClick,
  secondaryAction,
  className = '',
  style = {},
  tooltipTimestamp = true,
}) => {
  const formattedTime = new Date(timestamp).toLocaleString();
  const statusClass = `activity-status activity-status--${status}`;

  return (
    <div className={["activity-item", className].filter(Boolean).join(' ')} style={style}>
      {icon && <span className="activity-icon">{icon}</span>}
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={user}
          className="activity-avatar"
          onClick={onUserClick ? () => onUserClick(user) : undefined}
          tabIndex={onUserClick ? 0 : undefined}
          role={onUserClick ? 'button' : undefined}
          aria-label={onUserClick ? `View ${user}` : undefined}
        />
      )}
      <div className="activity-content">
        <div className="activity-text">
          <strong
            className={onUserClick ? 'activity-user-link' : ''}
            onClick={onUserClick ? () => onUserClick(user) : undefined}
            tabIndex={onUserClick ? 0 : undefined}
            role={onUserClick ? 'button' : undefined}
            aria-label={onUserClick ? `View ${user}` : undefined}
            style={{ cursor: onUserClick ? 'pointer' : undefined }}
          >
            {user}
          </strong>{' '}
          {action}
          {badge && <span className="activity-badge">{badge}</span>}
        </div>
        <div className="activity-meta">
          <span className={statusClass} aria-label={status} />
          <span
            className="activity-time"
            title={tooltipTimestamp ? formattedTime : undefined}
          >
            {tooltipTimestamp ? new Date(timestamp).toLocaleDateString() : formattedTime}
          </span>
          {secondaryAction && <span className="activity-secondary">{secondaryAction}</span>}
        </div>
      </div>
    </div>
  );
};
