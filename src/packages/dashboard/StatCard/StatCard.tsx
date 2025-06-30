// src/packages/dashboard/StatCard.tsx
import React from 'react';
import './StatCard.css';

export interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  description?: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
  onClick?: () => void;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  description,
  variant = 'default',
  onClick,
}) => {
  return (
    <div
      className={`stat-card ${variant} ${onClick ? 'clickable' : ''}`}
      onClick={onClick}
    >
      <div className="stat-header">
        {icon && <div className="stat-icon">{icon}</div>}
        <div className="stat-title">{title}</div>
      </div>
      <div className="stat-value">{value}</div>
      {description && <div className="stat-desc">{description}</div>}
    </div>
  );
};
