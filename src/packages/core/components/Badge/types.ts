export interface BadgeProps {
  text?: number | string;
  type?: 'success' | 'error' | 'warning' | 'info' | 'default';
  showDot?: boolean;
  children?: React.ReactNode;
  color?: string;
} 