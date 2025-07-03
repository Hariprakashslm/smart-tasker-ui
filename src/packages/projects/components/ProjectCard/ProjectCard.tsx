// src/ui/projects/ProjectCard.tsx
import React from 'react';
import './ProjectCard.css';
import { Avatar } from '@core/Avatar';
import { Badge } from '@core/Badge';
import { Button } from '@core/Button';

export interface ProjectCardProps {
  name: string;
  description?: string;
  status?: 'active' | 'archived' | 'draft';
  owner?: {
    name: string;
    imageUrl?: string;
  };
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  status = 'active',
  owner,
  onClick,
  onEdit,
  onDelete,
}) => {
  const statusColor = {
    active: 'green',
    archived: 'gray',
    draft: 'yellow',
  }[status];

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-header">
        <h3 className="project-title">{name}</h3>
        <Badge text={status} color={statusColor} />
      </div>

      {description && <p className="project-desc">{description}</p>}

      <div className="project-footer">
        {owner && (
          <div className="project-owner">
            <Avatar name={owner.name} src={owner.imageUrl} size={'medium'} />
            <span>{owner.name}</span>
          </div>
        )}

        <div className="project-actions">
          {onEdit && (
            <Button
              size="small"
              variant="ghost"
              label="Edit"
              onClick={() => {
                onEdit();
              }}
            />
          )}
          {onDelete && (
            <Button
              size="small"
              variant="danger"
              label="Delete"
              onClick={() => {
                onDelete();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
