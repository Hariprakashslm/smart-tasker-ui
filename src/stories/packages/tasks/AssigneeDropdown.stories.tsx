import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  AssigneeDropdown,
  AssigneeDropdownProps,
} from '@tasks/AssigneeDropdown';

const assigneeMock = [
  {
    id: '1',
    name: 'Alice Johnson',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
  },
  { id: '2', name: 'Bob Smith', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
  {
    id: '3',
    name: 'Charlie Rose',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
  },
];

const meta: Meta<typeof AssigneeDropdown> = {
  title: 'Packages/Tasks/AssigneeDropdown',
  component: AssigneeDropdown,
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' },
  },
};

export default meta;

type Story = StoryObj<typeof AssigneeDropdown>;

// Default story with working state
export const Default: Story = {
  render: (args: AssigneeDropdownProps) => {
    const [selectedId, setSelectedId] = useState<string | null>(
      args.selectedId ?? null
    );
    return (
      <AssigneeDropdown
        {...args}
        selectedId={selectedId}
        onSelect={(id) => {
          setSelectedId(id);
          args.onSelect?.(id);
        }}
      />
    );
  },
  args: {
    assignees: assigneeMock,
    selectedId: null,
    disabled: false,
  },
};

export const Preselected: Story = {
  args: {
    assignees: assigneeMock,
    selectedId: '2',
  },
};

export const Disabled: Story = {
  args: {
    assignees: assigneeMock,
    selectedId: '1',
    disabled: true,
  },
};

export const EmptyAssignees: Story = {
  args: {
    assignees: [],
    selectedId: null,
  },
};
