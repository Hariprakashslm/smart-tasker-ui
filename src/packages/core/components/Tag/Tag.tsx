import React from 'react';
import './Tag.css';
import type { TagProps } from './types';

export const Tag: React.FC<TagProps> = ({
  label,
  onRemove,
  color = 'default',
  disabled = false,
}) => {
  return (
    <span className={`tag tag-${color} ${disabled ? 'tag-disabled' : ''}`}>
      {label}
      {onRemove && !disabled && (
        <button
          className="tag-remove"
          onClick={onRemove}
          aria-label="Remove tag"
        >
          &times;
        </button>
      )}
    </span>
  );
};
