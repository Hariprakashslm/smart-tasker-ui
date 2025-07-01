// src/ui/common/SearchBar.tsx
import React from 'react';
import { Input } from 'core/components/Input';
import './SearchBar.css';
export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onClear?: () => void;
}

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
      icon={<span style={{ fontSize: 14 }}>🔍</span>}
      suffix={
        value && onClear ? (
          <button
            onClick={onClear}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 14,
              cursor: 'pointer',
              color: '#888',
            }}
          >
            ✖
          </button>
        ) : undefined
      }
    />
  );
};
