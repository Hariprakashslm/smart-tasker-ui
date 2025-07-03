// src/ui/admin/UserTable.tsx
import React from 'react';
import './UserTable.css';
import { Avatar } from '@core/Avatar';
import { Button } from '@core/Button';
import { Badge } from '@core/Badge';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
  avatarUrl?: string;
}

export interface UserTableProps {
  users: User[];
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
  onView?: (user: User) => void;
}

export const UserTable: React.FC<UserTableProps> = ({
  users,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <div className="user-table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            {onEdit || onDelete || onView ? <th>Actions</th> : null}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="user-info">
                  <Avatar
                    name={user.name}
                    src={user.avatarUrl}
                    size={'medium'}
                  />
                  <span>{user.name}</span>
                </div>
              </td>
              <td>{user.email}</td>
              <td>
                <Badge text={user.role} color={getRoleColor(user.role)} />
              </td>
              {(onEdit || onDelete || onView) && (
                <td>
                  <div className="user-actions">
                    {onView && (
                      <Button
                        label="View"
                        variant="outlined"
                        size="small"
                        onClick={() => onView(user)}
                      />
                    )}
                    {onEdit && (
                      <Button
                        label="Edit"
                        variant="outlined"
                        size="small"
                        onClick={() => onEdit(user)}
                      />
                    )}
                    {onDelete && (
                      <Button
                        label="Delete"
                        variant="outlined"
                        size="small"
                        onClick={() => onDelete(user)}
                      />
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getRoleColor = (role: string) => {
  switch (role) {
    case 'admin':
      return 'red';
    case 'member':
      return 'blue';
    default:
      return 'gray';
  }
};
