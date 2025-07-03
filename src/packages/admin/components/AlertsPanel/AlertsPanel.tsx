// src/ui/admin/AlertsPanel.tsx
import React from 'react';
import './AlertsPanel.css';
import { Badge } from '@core/Badge';
import { Button } from '@core/Button';

export interface AlertItem {
  id: string;
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'error' | 'success';
  timestamp?: string;
  onView?: () => void;
  onDismiss?: () => void;
}

export interface AlertsPanelProps {
  alerts: AlertItem[];
  maxHeight?: string;
}

export const AlertsPanel: React.FC<AlertsPanelProps> = ({
  alerts,
  maxHeight = '320px',
}) => {
  return (
    <div className="alerts-panel" style={{ maxHeight }}>
      {alerts.length === 0 ? (
        <div className="alerts-empty">🎉 No active alerts</div>
      ) : (
        <ul className="alerts-list">
          {alerts.map((alert) => (
            <li key={alert.id} className={`alert-item alert-${alert.severity}`}>
              <div className="alert-header">
                <span className="alert-title">{alert.title}</span>
                <Badge text={alert.severity} color={getColor(alert.severity)} />
              </div>
              <div className="alert-message">{alert.message}</div>
              <div className="alert-actions">
                {alert.onView && (
                  <Button
                    label="View"
                    variant="outlined"
                    size="small"
                    onClick={alert.onView}
                  />
                )}
                {alert.onDismiss && (
                  <Button
                    label="Dismiss"
                    variant="outlined"
                    size="small"
                    onClick={alert.onDismiss}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const getColor = (severity: string) => {
  switch (severity) {
    case 'info':
      return 'blue';
    case 'warning':
      return 'yellow';
    case 'error':
      return 'red';
    case 'success':
      return 'green';
    default:
      return 'gray';
  }
};
