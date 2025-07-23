export interface LiveUpdateBannerProps {
  message: string;
  variant?: 'info' | 'success' | 'warning' | 'error';
  actionLabel?: string;
  onAction?: () => void;
  fixed?: boolean;
} 