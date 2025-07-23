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
