// src/ui/layout/Sidebar.tsx
import React from 'react';
import './Sidebar.css';
import type { SidebarProps } from './types';

export const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  appName,
  onNavigate,
}) => {
  return (
    <aside className="sidebar">
      {appName && <div className="sidebar-header">{appName}</div>}
      <nav className="sidebar-nav">
        {navItems && navItems.length > 0 ? (
          navItems.map((item) => (
            <button
              key={item.path}
              className={`sidebar-link ${item.active ? 'active' : ''}`}
              onClick={() => onNavigate?.(item.path)}
            >
              {item.icon && <span className="sidebar-icon">{item.icon}</span>}
              {item.label}
            </button>
          ))
        ) : (
          <div style={{ color: '#888', padding: '1rem' }}>
            No navigation items
          </div>
        )}
      </nav>
    </aside>
  );
};
