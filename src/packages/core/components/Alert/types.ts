export interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  description?: string;
  closable?: boolean;
  onClose?: () => void;
} 