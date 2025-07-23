import React from 'react';
import './EmptyState.css';
import type { EmptyStateProps } from './types';

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title = 'No Data',
  description = 'There’s nothing to show here yet.',
  action,
}) => {
  return (
    <div className="empty-state">
      {icon && <div className="empty-icon">{icon}</div>}
      <h2 className="empty-title">{title}</h2>
      <p className="empty-description">{description}</p>
      {action && <div className="empty-action">{action}</div>}
    </div>
  );
};
