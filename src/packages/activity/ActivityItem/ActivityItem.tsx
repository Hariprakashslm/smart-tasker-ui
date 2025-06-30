// src/ui/tasks/ActivityItem.tsx
import React from 'react';
import './ActivityItem.css';

export interface ActivityItemProps {
  user: string;
  action: string;
  timestamp: string; // ISO string
  avatarUrl?: string;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({
  user,
  action,
  timestamp,
  avatarUrl,
}) => {
  const formattedTime = new Date(timestamp).toLocaleString();

  return (
    <div className="activity-item">
      {avatarUrl && (
        <img src={avatarUrl} alt={user} className="activity-avatar" />
      )}

      <div className="activity-content">
        <div className="activity-text">
          <strong>{user}</strong> {action}
        </div>
        <div className="activity-time">{formattedTime}</div>
      </div>
    </div>
  );
};
