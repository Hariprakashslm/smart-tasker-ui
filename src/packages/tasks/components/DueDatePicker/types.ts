export interface DueDateInputProps {
  label?: string;
  value: string;
  onChange: (newDate: string) => void;
  min?: string;
  max?: string;
  disabled?: boolean;
  required?: boolean;
} 