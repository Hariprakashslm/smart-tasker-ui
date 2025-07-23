// src/ui/tasks/AssigneeDropdown.tsx
import React from 'react';
import { Select } from '@core/Select';
import { AssigneeDropdownProps } from './types';
import { SelectOption } from '@/packages/core';

export const AssigneeDropdown: React.FC<AssigneeDropdownProps> = ({
  assignees,
  selectedId,
  onSelect,
  disabled = false,
}) => {
  const options: SelectOption[] = assignees.map((user) => ({
    label: user.name,
    value: user.id,
  }));

  return (
    <Select
      label="Assignee"
      value={selectedId ?? ''}
      onChange={onSelect}
      options={options}
      placeholder="Assign to..."
      disabled={disabled}
    />
  );
};
