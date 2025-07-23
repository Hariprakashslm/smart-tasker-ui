export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | string;
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
  closeIcon?: React.ReactNode;
  ariaLabel?: string;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
  onOverlayClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} 