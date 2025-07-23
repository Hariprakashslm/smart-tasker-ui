export interface NavItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface SidebarProps {
  navItems: NavItem[];
  appName?: string;
  onNavigate?: (path: string) => void;
} 