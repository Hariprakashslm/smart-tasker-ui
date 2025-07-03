// src/ui/admin/LogViewer.tsx
import React from 'react';
import './LogViewer.css';
import { Badge } from '@core/Badge';

export interface LogEntry {
  id: string;
  timestamp: string; // ISO or human-readable
  level: 'info' | 'success' | 'warning' | 'error';
  message: string;
}

export interface LogViewerProps {
  logs: LogEntry[];
  maxHeight?: string;
}

export const LogViewer: React.FC<LogViewerProps> = ({
  logs,
  maxHeight = '400px',
}) => {
  return (
    <div className="log-viewer" style={{ maxHeight }}>
      {logs.length === 0 ? (
        <div className="log-empty">No logs to display</div>
      ) : (
        <ul className="log-list">
          {logs.map((log) => (
            <li key={log.id} className="log-item">
              <span className="log-time">{formatTime(log.timestamp)}</span>
              <Badge text={log.level} color={getBadgeColor(log.level)} />
              <span className="log-message">{log.message}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const getBadgeColor = (level: LogEntry['level']) => {
  switch (level) {
    case 'info':
      return 'blue';
    case 'success':
      return 'green';
    case 'warning':
      return 'yellow';
    case 'error':
      return 'red';
    default:
      return 'gray';
  }
};

const formatTime = (iso: string) => {
  const date = new Date(iso);
  return date.toLocaleString(); // You can use dayjs/format if needed
};
