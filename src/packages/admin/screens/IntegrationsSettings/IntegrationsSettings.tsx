import React from 'react';
import './IntegrationsSettings.css';
import { IntegrationsSettingsProps } from './types';

export const IntegrationsSettings: React.FC<IntegrationsSettingsProps> = ({
  integrations,
  settings,
  onConnect,
  onDisconnect,
  onUpdateSetting,
}) => {
  return (
    <div className="integrations-settings-page">
      <h1>Integrations & Settings</h1>
      <section className="integrations-section">
        <h2>Integrations</h2>
        <ul className="integrations-list">
          {integrations.map((integration) => (
            <li key={integration.id} className="integration-item">
              <div className="integration-info">
                <img src={integration.icon} alt={integration.name} className="integration-icon" />
                <span className="integration-name">{integration.name}</span>
              </div>
              {integration.connected ? (
                <button className="disconnect-btn" onClick={() => onDisconnect?.(integration.id)}>
                  Disconnect
                </button>
              ) : (
                <button className="connect-btn" onClick={() => onConnect?.(integration.id)}>
                  Connect
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
      <section className="settings-section">
        <h2>App Settings</h2>
        <div className="settings-list">
          <label>
            Language:
            <select
              value={settings.language}
              onChange={e => onUpdateSetting?.('language', e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </label>
          <label>
            Timezone:
            <select
              value={settings.timezone}
              onChange={e => onUpdateSetting?.('timezone', e.target.value)}
            >
              <option value="UTC">UTC</option>
              <option value="America/New_York">America/New_York</option>
              <option value="Europe/London">Europe/London</option>
            </select>
          </label>
          <label>
            Theme:
            <select
              value={settings.theme}
              onChange={e => onUpdateSetting?.('theme', e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </label>
        </div>
      </section>
    </div>
  );
}; 