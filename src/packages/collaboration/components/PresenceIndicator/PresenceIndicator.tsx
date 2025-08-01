// src/packages/collaboration/PresenceIndicator.tsx
import React from 'react';
import './PresenceIndicator.css';
import { Avatar } from '@core/Avatar';
import { Tooltip } from '@core/Tooltip';
import { PresenceIndicatorProps } from './types';

export const PresenceIndicator: React.FC<PresenceIndicatorProps> = ({
  users,
  maxAvatars = 4,
  label = 'Online',
}) => {
  if (users.length === 0) return null;

  const visible = users.slice(0, maxAvatars);
  const extra = users.length - visible.length;

  return (
    <div className="presence-indicator">
      {label && <span className="presence-label">{label}:</span>}
      <div className="presence-avatars">
        {visible.map((user) => (
          <Tooltip key={user.id} content={user.name}>
            <div className="presence-avatar">
              <Avatar name={user.name} src={user.avatarUrl} size={'medium'} />
            </div>
          </Tooltip>
        ))}
        {extra > 0 && <div className="presence-extra">+{extra}</div>}
      </div>
    </div>
  );
};
