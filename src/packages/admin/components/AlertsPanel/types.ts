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
