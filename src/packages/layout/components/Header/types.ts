export interface HeaderProps {
  title?: string;
  onSearch?: (value: string) => void;
  unreadNotifications?: number;
  onNotificationClick?: () => void;
  user?: {
    name: string;
    imageUrl?: string;
    onProfile: () => void;
    onLogout: () => void;
  };
} 