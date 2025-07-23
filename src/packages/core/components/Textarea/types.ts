export interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  error?: string;
  name?: string;
  id?: string;
} 