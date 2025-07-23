export interface NotificationDropdownProps {
  notifications: {
    id: string;
    title: string;
    message?: string;
    time?: string;
    read?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
  }[];
  onMarkAllRead?: () => void;
  onViewAll?: () => void;
} 