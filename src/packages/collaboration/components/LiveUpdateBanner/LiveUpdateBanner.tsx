// src/packages/collaboration/LiveUpdateBanner.tsx
import React from 'react';
import './LiveUpdateBanner.css';
import { Button } from 'core/Button';
import { Badge } from 'core/Badge';

export interface LiveUpdateBannerProps {
  message: string;
  variant?: 'info' | 'success' | 'warning' | 'error';
  actionLabel?: string;
  onAction?: () => void;
  fixed?: boolean;
}

export const LiveUpdateBanner: React.FC<LiveUpdateBannerProps> = ({
  message,
  variant = 'info',
  actionLabel,
  onAction,
  fixed = false,
}) => {
  return (
    <div className={`live-update-banner ${variant} ${fixed ? 'fixed' : ''}`}>
      <span className="live-update-badge">
        <Badge count={variant.toUpperCase()} color={variant} />
      </span>
      <span className="live-update-text">{message}</span>
      {actionLabel && onAction && (
        <Button size="small" label={actionLabel} onClick={onAction} />
      )}
    </div>
  );
};
