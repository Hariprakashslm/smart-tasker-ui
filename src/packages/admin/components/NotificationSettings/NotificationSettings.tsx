// src/ui/admin/NotificationSettings.tsx
import React from 'react';
import './NotificationSettings.css';
import { NotificationSettingsProps } from './types';

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  options,
}) => {
  return (
    <div className="notification-settings">
      <h2 className="notification-title">Notification Settings</h2>
      <div className="notification-list">
        {options.map((option, index) => (
          <div key={index} className="notification-item">
            <div className="notification-label-group">
              <label className="notification-label">{option.label}</label>
              {option.description && (
                <p className="notification-description">{option.description}</p>
              )}
            </div>
            <input
              type="checkbox"
              className="notification-toggle"
              checked={option.enabled}
              onChange={(e) => option.onToggle(e.target.checked)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
