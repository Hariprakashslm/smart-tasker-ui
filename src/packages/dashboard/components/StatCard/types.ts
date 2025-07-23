export interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  iconSize?: number;
  description?: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | string;
  onClick?: () => void;
  loading?: boolean;
  empty?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
} 