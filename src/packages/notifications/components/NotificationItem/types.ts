export interface NotificationItemProps {
  id: string;
  title: string;
  message?: string;
  time?: string;
  read?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
} 