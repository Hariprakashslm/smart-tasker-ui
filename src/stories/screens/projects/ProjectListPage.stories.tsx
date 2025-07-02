// src/ui-stories/projects/ProjectList.stories.tsx
import React from 'react';
import { ProjectListPage } from '@screens/projects/ProjectListPage';
import { ProjectCardProps } from '@projects/ProjectCard';

export default {
  title: 'Pages/Projects/ProjectListPage',
  component: ProjectListPage,
};

const mockProjects: ProjectCardProps[] = [
  {
    name: 'Smart Tasker',
    description: 'Task automation and scheduling app',
    status: 'active',
    owner: {
      name: 'Hari Prakash',
      imageUrl: 'https://i.pravatar.cc/150?img=11',
    },
  },
  {
    name: 'CRM Reboot',
    description: 'Rewriting CRM backend with NestJS',
    status: 'draft',
  },
  {
    name: 'Marketing Page',
    description: 'Landing page experiments',
    status: 'archived',
  },
];

export const Default = () => (
  <div style={{ padding: 24 }}>
    <ProjectListPage
      projects={mockProjects}
      onProjectClick={(p) => alert(`Open ${p.name}`)}
      onEditProject={(p) => alert(`Edit ${p.name}`)}
      onDeleteProject={(p) => alert(`Delete ${p.name}`)}
    />
  </div>
);

export const Empty = () => <ProjectListPage projects={[]} />;
