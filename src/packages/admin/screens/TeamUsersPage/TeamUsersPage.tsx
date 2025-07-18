import React from 'react';
import { UserTable, User } from '../../components/UserTable/UserTable';
import { AssigneeDropdown, Assignee } from '../../../tasks/components/AssigneeDropdown/AssigneeDropdown';
import './TeamUsersPage.css';

export interface TeamUsersPageProps {
  users: User[];
  assignees: Assignee[];
  onEditUser?: (user: User) => void;
  onDeleteUser?: (user: User) => void;
  onAssignTask?: (userId: string) => void;
  selectedAssigneeId?: string | null;
}

export const TeamUsersPage: React.FC<TeamUsersPageProps> = ({
  users,
  assignees,
  onEditUser,
  onDeleteUser,
  onAssignTask,
  selectedAssigneeId,
}) => {
  return (
    <div className="team-users-page">
      <h1 className="team-users-title">Team Members</h1>
      <div className="team-users-actions">
        <AssigneeDropdown
          assignees={assignees}
          selectedId={selectedAssigneeId ?? null}
          onSelect={onAssignTask || (() => {})}
        />
      </div>
      <UserTable
        users={users}
        onEdit={onEditUser}
        onDelete={onDeleteUser}
      />
    </div>
  );
}; 