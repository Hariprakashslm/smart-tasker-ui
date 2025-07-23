// src/ui/common/FilterPanel.tsx
import React, { useState, useMemo } from 'react';
import './FilterPanel.css';
import { SearchBar } from '../SearchBar';
import { Select } from '@core/Select';
import { Button } from '@core/Button';
import type { FilterPanelProps } from './types';

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
  darkMode = false,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Collect active filters for badges
  const activeFilters = useMemo(() => {
    const filters: { key: string; label: string; value: string }[] = [];
    if (status) filters.push({ key: 'status', label: 'Status', value: status });
    if (assignee)
      filters.push({ key: 'assignee', label: 'Assignee', value: assignee });
    if (search) filters.push({ key: 'search', label: 'Search', value: search });
    return filters;
  }, [status, assignee, search]);

  // Remove a filter badge
  const handleRemoveBadge = (key: string) => {
    if (key === 'status' && onStatusChange) onStatusChange('');
    if (key === 'assignee' && onAssigneeChange) onAssigneeChange('');
    if (key === 'search' && onClearSearch) onClearSearch();
  };

  // Count of advanced filters
  const advancedCount = [assignee].filter(Boolean).length;

  return (
    <div
      className={`filter-panel${darkMode ? ' filter-panel-dark' : ''}`}
      aria-label="Filter panel"
    >
      <div className="filter-badges" aria-live="polite">
        {activeFilters
          .filter((f) => f.key !== 'search')
          .map((f) => (
            <span className="filter-badge" key={f.key}>
              {f.label}: {f.value}
              <button
                className="filter-badge-remove"
                aria-label={`Remove ${f.label} filter`}
                onClick={() => handleRemoveBadge(f.key)}
                type="button"
              >
                ×
              </button>
            </span>
          ))}
      </div>
      <div className="filter-main-row">
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
        <button
          className="filter-more-btn"
          aria-expanded={showAdvanced}
          aria-controls="advanced-filters"
          onClick={() => setShowAdvanced((v) => !v)}
          type="button"
        >
          More Filters
          {advancedCount > 0 && (
            <span className="filter-count-badge">{advancedCount}</span>
          )}
          <span className={`filter-chevron${showAdvanced ? ' open' : ''}`}>
            ▼
          </span>
        </button>
      </div>
      <div
        id="advanced-filters"
        className={`filter-advanced${showAdvanced ? ' expanded' : ''}`}
        aria-hidden={!showAdvanced}
        style={{
          maxHeight: showAdvanced ? 200 : 0,
          transition: 'max-height 0.3s cubic-bezier(.4,0,.2,1)',
        }}
      >
        {assigneeOptions.length > 0 && (
          <Select
            label="Assignee"
            value={assignee || ''}
            options={assigneeOptions}
            onChange={onAssigneeChange!}
          />
        )}
      </div>
      {(onClearAll || onApply) && <div className="filter-divider" />}
      <div className="filter-actions">
        {onClearAll && (
          <Button
            label="Clear All"
            variant="outlined"
            onClick={onClearAll}
            className="core-button"
          />
        )}
        {onApply && (
          <Button label="Apply" onClick={onApply} className="core-button" />
        )}
      </div>
    </div>
  );
};
