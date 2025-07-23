import type { SelectOption } from '@core/Select/types';

export interface SortOption extends SelectOption {
  label: string;
  value: string;
}

export interface SortSelectorProps {
  value: string;
  options: SortOption[];
  onChange: (value: string) => void;
  direction?: 'asc' | 'desc';
  onDirectionToggle?: () => void;
  showDirectionToggle?: boolean;
} 