export interface NotificationsCenterPageProps {
  notifications: {
    id: string;
    title: string;
    message?: string;
    time?: string;
    read?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
  }[];
  onMarkRead?: (id: string) => void;
  onClearAll?: () => void;
} 