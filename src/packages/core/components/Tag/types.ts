export interface TagProps {
  label: string;
  onRemove?: () => void;
  color?: 'default' | 'primary' | 'success' | 'danger';
  disabled?: boolean;
} 