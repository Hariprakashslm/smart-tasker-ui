/**
 * StatCard - A dashboard card for displaying a key metric/statistic.
 *
 * @param title - The card title
 * @param value - The main value to display
 * @param icon - Optional icon (ReactNode)
 * @param iconSize - Optional icon size (px)
 * @param description - Optional description text
 * @param variant - Color variant (default/success/warning/error/info/custom)
 * @param onClick - Optional click handler (makes card clickable)
 * @param loading - Show loading skeleton
 * @param empty - Show empty state
 * @param className - Custom className
 * @param style - Custom style
 * @param ariaLabel - ARIA label for accessibility
 */
import React from 'react';
import './StatCard.css';
import type { StatCardProps } from './types';

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  iconSize = 24,
  description,
  variant = 'default',
  onClick,
  loading = false,
  empty = false,
  className = '',
  style = {},
  ariaLabel,
}) => {
  const isClickable = !!onClick;
  return (
    <div
      className={`stat-card ${variant} ${isClickable ? 'clickable' : ''} ${className}`.trim()}
      onClick={onClick}
      tabIndex={isClickable ? 0 : undefined}
      role={isClickable ? 'button' : 'region'}
      aria-label={ariaLabel || title}
      style={style}
    >
      <div className="stat-header">
        {icon && (
          <div className="stat-icon" style={{ fontSize: iconSize }}>
            {icon}
          </div>
        )}
        <div className="stat-title">{title}</div>
      </div>
      <div className="stat-value">
        {loading ? <span className="stat-skeleton" /> : empty ? <span className="stat-empty">--</span> : value}
      </div>
      {description && <div className="stat-desc">{description}</div>}
    </div>
  );
};
