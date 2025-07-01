// src/ui/tasks/AssigneeDropdown.tsx
import React from 'react';
import { Select, SelectOption } from 'core/components/Select';
export interface Assignee {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface AssigneeDropdownProps {
  assignees: Assignee[]; // list of all available users
  selectedId: string | null;
  onSelect: (id: string) => void;
  disabled?: boolean;
}

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
