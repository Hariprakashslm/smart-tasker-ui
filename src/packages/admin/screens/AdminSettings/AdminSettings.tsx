// src/ui/admin/AdminSettings.tsx
import React from 'react';
import './AdminSettings.css';
import { AdminSettingsProps } from './types';

export const AdminSettings: React.FC<AdminSettingsProps> = ({
  title = 'Admin Settings',
  settings,
}) => {
  return (
    <div className="admin-settings">
      <h2 className="settings-title">{title}</h2>
      <div className="settings-list">
        {settings.map((item, index) => (
          <div key={index} className="settings-item">
            <div className="settings-label-group">
              <label className="settings-label">{item.label}</label>
              {item.description && (
                <p className="settings-description">{item.description}</p>
              )}
            </div>

            {item.type === 'toggle' && (
              <input
                type="checkbox"
                className="settings-toggle"
                checked={item.value}
                onChange={(e) => item.onChange(e.target.checked)}
              />
            )}

            {item.type === 'text' && (
              <input
                type="text"
                className="settings-input"
                value={item.value}
                onChange={(e) => item.onChange(e.target.value)}
              />
            )}

            {item.type === 'select' && (
              <select
                className="settings-select"
                value={item.value}
                onChange={(e) => item.onChange(e.target.value)}
              >
                {item.options?.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
