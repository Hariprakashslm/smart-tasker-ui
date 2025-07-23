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
