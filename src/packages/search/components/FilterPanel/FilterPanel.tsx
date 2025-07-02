// src/ui/common/FilterPanel.tsx
import React from 'react';
import './FilterPanel.css';
import { SearchBar } from '../SearchBar';
import { Select, SelectOption } from '@core/Select';
import { Button } from '@core/Button';

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
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  search,
  onSearchChange,
  onClearSearch,
  status,
  statusOptions = [],
  onStatusChange,
  assignee,
  assigneeOptions = [],
  onAssigneeChange,
  onClearAll,
  onApply,
}) => {
  return (
    <div className="filter-panel">
      <SearchBar
        value={search}
        onChange={onSearchChange}
        onClear={onClearSearch}
      />

      {statusOptions.length > 0 && (
        <Select
          label="Status"
          value={status || ''}
          options={statusOptions}
          onChange={onStatusChange!}
        />
      )}

      {assigneeOptions.length > 0 && (
        <Select
          label="Assignee"
          value={assignee || ''}
          options={assigneeOptions}
          onChange={onAssigneeChange!}
        />
      )}

      <div className="filter-actions">
        <Button label="Clear All" variant="outline" onClick={onClearAll} />
        <Button label="Apply" onClick={onApply} />
      </div>
    </div>
  );
};
