export interface LabelOption {
  label: string;
  value: string;
  color?: string;
}

export interface LabelSelectorProps {
  selectedLabels: string[];
  availableLabels: LabelOption[];
  onChange: (labels: string[]) => void;
} 