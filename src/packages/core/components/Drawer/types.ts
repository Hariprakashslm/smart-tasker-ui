export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
  size?: 'small' | 'medium' | 'large' | string;
  width?: string | number;
  content: React.ReactNode;
  title?: string;
  header?: React.ReactNode;
  attachments?: any[];
  onRemove?: (attachment: any) => void;
  className?: string;
  style?: React.CSSProperties;
  closeIcon?: React.ReactNode;
  ariaLabel?: string;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
} 