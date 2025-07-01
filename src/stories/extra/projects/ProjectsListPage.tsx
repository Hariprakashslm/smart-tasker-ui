// src/pages/projects/ProjectsListPage.tsx
import React from 'react';
import './ProjectsListPage.css';
import { ProjectCard } from 'projects/ProjectCard';

const ProjectsListPage: React.FC = () => {
  const projects = [
    {
      id: '1',
      name: 'Smart Tasker Redesign',
      description: 'UI/UX improvements and component refactoring.',
      owner: {
        name: 'Hari Prakash',
        imageUrl: 'https://i.pravatar.cc/150?img=11',
      },
    },
    {
      id: '2',
      name: 'AI Agent POC',
      description: 'Building prototype for task automation bot.',
      owner: {
        name: 'Hari Prakash',
        imageUrl: 'https://i.pravatar.cc/150?img=11',
      },
    },
  ];

  return (
    <div className="projects-list-page">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            owner={project.owner}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsListPage;
