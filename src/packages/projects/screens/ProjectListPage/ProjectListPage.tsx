// src/ui/projects/ProjectList.tsx
import React from 'react';
import './ProjectListPage.css';
import type { ProjectListPageProps } from './types';
import { ProjectList } from '../../components/ProjectList';

export const ProjectListPage: React.FC<ProjectListPageProps> = ({
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
