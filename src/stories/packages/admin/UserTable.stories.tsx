// src/ui-stories/admin/UserTable.stories.tsx
import React from 'react';
import { UserTable, User } from '@admin/UserTable';

export default {
  title: 'Packages/Admin/UserTable',
  component: UserTable,
};

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@smarttasker.com',
    role: 'admin',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Bob Lee',
    email: 'bob@smarttasker.com',
    role: 'member',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Charlie Kim',
    email: 'charlie@smarttasker.com',
    role: 'viewer',
  },
];

export const Default = () => (
  <div style={{ padding: 24 }}>
    <UserTable
      users={mockUsers}
      onView={(user) => alert(`Viewing ${user.name}`)}
      onEdit={(user) => alert(`Editing ${user.name}`)}
      onDelete={(user) => alert(`Deleting ${user.name}`)}
    />
  </div>
);
