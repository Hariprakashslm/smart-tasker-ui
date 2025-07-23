export interface ButtonProps {
  label: string;
  variant?: 'contained' | 'outlined' | 'text' | 'ghost';
  color?: 'primary' | 'danger' | 'success' | 'warning' | 'default' | string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  rounded?: boolean;
  borderRadius?: number | string;
  spinner?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  autoFocus?: boolean;
  tabIndex?: number;
} 