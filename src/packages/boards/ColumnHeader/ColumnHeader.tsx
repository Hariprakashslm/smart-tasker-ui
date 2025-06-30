// src/ui/boards/ColumnHeader.tsx
import React from 'react';
import './ColumnHeader.css';

export interface ColumnHeaderProps {
  title: string;
  taskCount?: number;
  actions?: React.ReactNode; // optional dropdown or button
}

export const ColumnHeader: React.FC<ColumnHeaderProps> = ({
  title,
  taskCount,
  actions,
}) => {
  return (
    <div className="column-header">
      <div className="column-header-left">
        <h3 className="column-title">{title}</h3>
        {typeof taskCount === 'number' && (
          <span className="column-count">({taskCount})</span>
        )}
      </div>
      {actions && <div className="column-header-actions">{actions}</div>}
    </div>
  );
};
