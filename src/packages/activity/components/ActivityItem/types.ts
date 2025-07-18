export interface ActivityItemProps {
  user: string;
  action: string;
  timestamp: string; // ISO string
  avatarUrl?: string;
  icon?: React.ReactNode;
  status?: 'info' | 'success' | 'warning' | 'error';
  badge?: string;
  onUserClick?: (user: string) => void;
  secondaryAction?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tooltipTimestamp?: boolean;
} 