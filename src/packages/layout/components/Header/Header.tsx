// src/ui/layout/Header.tsx
import React from 'react';
import './Header.css';

import { Avatar } from 'core/components/Avatar';
import { Input } from 'core/components/Input';
import { Badge } from 'core/components/Badge';
import { Button } from 'core/components/Button';
import { ThemeToggle } from 'layout/components/ThemeToggle';

export interface HeaderProps {
  title?: string;
  onSearch?: (value: string) => void;
  unreadNotifications?: number;
  onNotificationClick?: () => void;
  user?: {
    name: string;
    imageUrl?: string;
    onProfile: () => void;
    onLogout: () => void;
  };
}

export const Header: React.FC<HeaderProps> = ({
  title = 'Smart Tasker',
  onSearch,
  unreadNotifications = 0,
  onNotificationClick,
  user,
}) => {
  return (
    <header className="app-header">
      <h2 className="app-title">{title}</h2>

      <div className="app-center">
        {onSearch && (
          <Input
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
          />
        )}
      </div>

      <div className="app-actions">
        {/* Theme toggle added here */}
        <ThemeToggle />

        <div className="header-icon-wrapper" onClick={onNotificationClick}>
          <span className="header-icon">🔔</span>
          {unreadNotifications > 0 && (
            <Badge count={unreadNotifications} type="error" />
          )}
        </div>

        {user && (
          <div className="header-user">
            <Avatar name={user.name} src={user.imageUrl} />
            <div className="header-dropdown">
              <Button
                variant="ghost"
                label="Profile"
                onClick={user.onProfile}
              />
              <Button variant="ghost" label="Logout" onClick={user.onLogout} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
