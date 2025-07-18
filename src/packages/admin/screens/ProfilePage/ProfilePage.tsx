import React, { useState } from 'react';
import './ProfilePage.css';
import { ProfilePageProps } from './types';

export const ProfilePage: React.FC<ProfilePageProps> = ({
  user,
  onUpdateProfile,
  onToggleDarkMode,
  onUpdateNotifications,
}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl || '');
  const [notifications, setNotifications] = useState(user.notifications ?? true);
  const [darkMode, setDarkMode] = useState(user.darkMode ?? false);
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    onUpdateProfile?.({ ...user, name, email, avatarUrl });
    setEditing(false);
  };

  const handleDarkMode = () => {
    setDarkMode((d) => {
      onToggleDarkMode?.(!d);
      return !d;
    });
  };

  const handleNotifications = () => {
    setNotifications((n) => {
      onUpdateNotifications?.(!n);
      return !n;
    });
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-avatar">
          <img src={avatarUrl || '/default-avatar.png'} alt={name} />
        </div>
        <div className="profile-info">
          {editing ? (
            <>
              <input value={name} onChange={e => setName(e.target.value)} />
              <input value={email} onChange={e => setEmail(e.target.value)} />
              <input value={avatarUrl} onChange={e => setAvatarUrl(e.target.value)} placeholder="Avatar URL" />
              <button className="profile-save" onClick={handleSave}>Save</button>
              <button className="profile-cancel" onClick={() => setEditing(false)}>Cancel</button>
            </>
          ) : (
            <>
              <h2>{name}</h2>
              <p>{email}</p>
              <button className="profile-edit" onClick={() => setEditing(true)}>Edit Profile</button>
            </>
          )}
        </div>
        <div className="profile-preferences">
          <label>
            <input type="checkbox" checked={darkMode} onChange={handleDarkMode} />
            Dark Mode
          </label>
          <label>
            <input type="checkbox" checked={notifications} onChange={handleNotifications} />
            Email Notifications
          </label>
        </div>
      </div>
    </div>
  );
}; 