import React from 'react';
import {
  TeamUsersPage,
  TeamUsersPageProps,
} from '@screens/admin/TeamUsersPage';
import { User } from '@admin/UserTable';
import { Assignee } from '@tasks/AssigneeDropdown';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TeamUsersPage> = {
  title: 'Screens/Admin/TeamUsersPage',
  component: TeamUsersPage,
};
export default meta;

type Story = StoryObj<typeof TeamUsersPage>;

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'admin',
    avatarUrl: '',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'member',
    avatarUrl: '',
  },
  {
    id: '3',
    name: 'Carol Lee',
    email: 'carol@example.com',
    role: 'viewer',
    avatarUrl: '',
  },
];

const mockAssignees: Assignee[] = [
  { id: '1', name: 'Alice Johnson' },
  { id: '2', name: 'Bob Smith' },
  { id: '3', name: 'Carol Lee' },
];

export const Default: Story = {
  args: {
    users: mockUsers,
    assignees: mockAssignees,
    onEditUser: (user: User) => alert('Edit ' + user.name),
    onDeleteUser: (user: User) => alert('Delete ' + user.name),
    onAssignTask: (id: string) => alert('Assign task to user ' + id),
    selectedAssigneeId: '2',
  },
};

export const NoUsers: Story = {
  args: {
    users: [],
    assignees: mockAssignees,
  },
};

export const OnlyAdmins: Story = {
  args: {
    users: mockUsers.filter((u) => u.role === 'admin'),
    assignees: mockAssignees,
  },
};

export const WithTaskAssignment: Story = {
  args: {
    users: mockUsers,
    assignees: mockAssignees,
    onAssignTask: (id: string) => alert('Assign task to user ' + id),
    selectedAssigneeId: '1',
  },
};
