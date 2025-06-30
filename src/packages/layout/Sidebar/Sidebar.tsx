// src/ui/layout/Sidebar.tsx
import React from 'react';
import './Sidebar.css';

export interface NavItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface SidebarProps {
  navItems?: NavItem[];
  appName?: string;
  onNavigate?: (path: string) => void; // for Storybook/local use
}

export const Sidebar: React.FC<SidebarProps> = ({
  navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: '🏠' },
    { label: 'Projects', path: '/projects', icon: '📁' },
    { label: 'Tasks', path: '/tasks', icon: '✅' },
    { label: 'Settings', path: '/settings', icon: '⚙️' },
  ],
  appName = 'Smart Tasker',
  onNavigate,
}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">{appName}</div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`sidebar-link ${item.active ? 'active' : ''}`}
            onClick={() => onNavigate?.(item.path)}
          >
            {item.icon && <span className="sidebar-icon">{item.icon}</span>}
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};
