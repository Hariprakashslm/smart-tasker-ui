// src/ui/layout/Header.tsx
import React from 'react';
import './Header.css';

import { Avatar } from '@core/Avatar';
import { Input } from '@core/Input';
import { Badge } from '@core/Badge';
import { Button } from '@core/Button';
import { ThemeToggle } from '@layout/ThemeToggle';
import type { HeaderProps } from './types';

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
            <Badge text={unreadNotifications} type="error" />
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
