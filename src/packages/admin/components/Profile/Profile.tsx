// src/ui/admin/Profile.tsx
import React from 'react';
import './Profile.css';
import { Avatar } from '@core/Avatar';

export interface ProfileProps {
  name: string;
  email: string;
  role: string;
  bio?: string;
  avatarUrl?: string;
  editable?: boolean;
  onEdit?: () => void;
}

export const Profile: React.FC<ProfileProps> = ({
  name,
  email,
  role,
  bio,
  avatarUrl,
  editable = false,
  onEdit,
}) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <Avatar src={avatarUrl} name={name} size="large" />
        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-email">{email}</p>
          <p className="profile-role">{role}</p>
        </div>
        {editable && (
          <button className="profile-edit-btn" onClick={onEdit}>
            Edit Profile
          </button>
        )}
      </div>

      {bio && <p className="profile-bio">{bio}</p>}
    </div>
  );
};
