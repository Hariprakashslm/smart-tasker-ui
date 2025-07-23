// src/ui/common/SearchBar.tsx
import React from 'react';
import { Input } from '@core/Input';
import './SearchBar.css';
import type { SearchBarProps } from './types';

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  onClear,
}) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      icon={<span className="searchbar-icon" aria-hidden="true">🔎</span>}
      aria-label="Search"
      suffix={
        value && onClear ? (
          <button
            onClick={onClear}
            className="searchbar-clear-btn"
            aria-label="Clear search"
            type="button"
          >
            <span aria-hidden="true">✕</span>
          </button>
        ) : undefined
      }
    />
  );
};
