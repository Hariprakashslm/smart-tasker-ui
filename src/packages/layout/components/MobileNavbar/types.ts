export interface MobileNavbarProps {
  title?: string;
  onMenuToggle?: () => void;
  onAvatarClick?: () => void;
  user?: {
    name: string;
    imageUrl?: string;
  };
} 