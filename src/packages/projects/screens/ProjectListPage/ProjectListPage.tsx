// src/ui/projects/ProjectList.tsx
import React from 'react';
import './ProjectListPage.css';
import { ProjectList, ProjectListProps } from '@projects/ProjectList';

export const ProjectListPage: React.FC<ProjectListProps> = ({
  projects,
  onProjectClick,
  onEditProject,
  onDeleteProject,
}) => {
  if (projects.length === 0) {
    return <div className="project-list-empty">No projects available.</div>;
  }

  return (
    <ProjectList
      projects={projects}
      onProjectClick={onProjectClick}
      onEditProject={onEditProject}
      onDeleteProject={onDeleteProject}
    />
  );
};
