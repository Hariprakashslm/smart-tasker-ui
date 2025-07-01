// src/ui/admin/AccountSettings.tsx
import React, { useState } from 'react';
import './AccountSettings.css';

export interface AccountSettingsProps {
  initialName: string;
  initialEmail: string;
  onSave: (name: string, email: string, password?: string) => void;
  onDeactivate?: () => void;
}

export const AccountSettings: React.FC<AccountSettingsProps> = ({
  initialName,
  initialEmail,
  onSave,
  onDeactivate,
}) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');

  return (
    <form
      className="account-settings"
      onSubmit={(e) => {
        e.preventDefault();
        onSave(name, email, password || undefined);
      }}
    >
      <h2 className="account-title">Account Settings</h2>

      <div className="account-field">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="account-field">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="account-field">
        <label>New Password</label>
        <input
          type="password"
          value={password}
          placeholder="Leave blank to keep current password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="account-actions">
        <button type="submit" className="save-btn">
          Save Changes
        </button>
        {onDeactivate && (
          <button
            type="button"
            className="deactivate-btn"
            onClick={onDeactivate}
          >
            Deactivate Account
          </button>
        )}
      </div>
    </form>
  );
};
