// src/ui/projects/ProjectList.tsx
import React from 'react';
import './ProjectList.css';
import { ProjectCard, ProjectCardProps } from '../ProjectCard';
import type { ProjectListProps } from './types';

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  onProjectClick,
  onEditProject,
  onDeleteProject,
}) => {
  if (projects.length === 0) {
    return <div className="project-list-empty">No projects available.</div>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          {...project}
          onClick={() => onProjectClick?.(project)}
          onEdit={onEditProject ? () => onEditProject(project) : undefined}
          onDelete={
            onDeleteProject ? () => onDeleteProject(project) : undefined
          }
        />
      ))}
    </div>
  );
};
