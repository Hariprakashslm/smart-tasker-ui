import type { SelectOption } from '@core/Select/types';

export interface FilterPanelProps {
  search: string;
  onSearchChange: (value: string) => void;
  onClearSearch?: () => void;
  status?: string;
  statusOptions?: SelectOption[];
  onStatusChange?: (value: string) => void;
  assignee?: string;
  assigneeOptions?: SelectOption[];
  onAssigneeChange?: (value: string) => void;
  onClearAll?: () => void;
  onApply?: () => void;
  darkMode?: boolean;
} 