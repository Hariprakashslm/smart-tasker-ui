// src/ui/common/SortSelector.tsx
import React from 'react';
import { Select, SelectOption } from '@core/Select';
import './SortSelector.css';
import type { SortOption, SortSelectorProps } from './types';

export const SortSelector: React.FC<SortSelectorProps> = ({
  value,
  options,
  onChange,
  direction = 'asc',
  onDirectionToggle,
  showDirectionToggle = true,
}) => {
  return (
    <div className="sort-selector">
      <Select
        label="Sort by"
        value={value}
        options={options}
        onChange={onChange}
      />
      {showDirectionToggle && onDirectionToggle && (
        <button
          className="sort-toggle"
          onClick={onDirectionToggle}
          title={direction === 'asc' ? 'Ascending' : 'Descending'}
        >
          {direction === 'asc' ? '⬆️' : '⬇️'}
        </button>
      )}
    </div>
  );
};
