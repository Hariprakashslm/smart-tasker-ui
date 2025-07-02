// src/ui/admin/AuditLogs.tsx
import React from 'react';
import { Avatar } from '@core/Avatar';
import { Tooltip } from '@core/Tooltip';
import './AuditLogs.css';

export interface AuditLogEntry {
  user: string;
  avatarUrl?: string;
  action: string;
  timestamp: string;
  details?: string;
}

export interface AuditLogsProps {
  logs: AuditLogEntry[];
}

export const AuditLogs: React.FC<AuditLogsProps> = ({ logs }) => {
  return (
    <div className="audit-logs">
      <h2 className="audit-title">Audit Logs</h2>
      <ul className="audit-list">
        {logs.map((log, index) => (
          <li className="audit-item" key={index}>
            <Tooltip content={log.user}>
              <Avatar name={log.user} src={log.avatarUrl} size="small" />
            </Tooltip>
            <div className="audit-info">
              <div className="audit-action">
                <strong>{log.user}</strong> {log.action}
              </div>
              {log.details && (
                <div className="audit-details">{log.details}</div>
              )}
              <div className="audit-timestamp">{log.timestamp}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
