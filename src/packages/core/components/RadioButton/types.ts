export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioButtonProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  label?: string;
} 