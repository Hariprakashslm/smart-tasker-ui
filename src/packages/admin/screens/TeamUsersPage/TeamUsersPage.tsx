import React from 'react';
import { UserTable } from '../../components/UserTable/UserTable';
import { AssigneeDropdown } from '@tasks/AssigneeDropdown';
import './TeamUsersPage.css';
import { TeamUsersPageProps } from './types';

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
      <UserTable users={users} onEdit={onEditUser} onDelete={onDeleteUser} />
    </div>
  );
};
