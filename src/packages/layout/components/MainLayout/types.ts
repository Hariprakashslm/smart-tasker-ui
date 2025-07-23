export interface MainLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  user?: {
    name: string;
    imageUrl?: string;
    onProfile: () => void;
    onLogout: () => void;
  };
  showSearch?: boolean;
  unreadNotifications?: number;
  navItems?: import('../Sidebar/Sidebar').NavItem[];
  appName?: string;
} 