// src/ui-stories/projects/ProjectCard.stories.tsx
import React from 'react';
import { ProjectCard } from 'projects/ProjectCard';

export default {
  title: 'Packages/Projects/ProjectCard',
  component: ProjectCard,
};

export const Default = () => (
  <div style={{ padding: 24, maxWidth: 400 }}>
    <ProjectCard
      name="Smart Tasker"
      description="A productivity tool for managing tasks and deadlines."
      status="active"
      owner={{
        name: 'Hari Prakash',
        imageUrl: 'https://i.pravatar.cc/150?img=12',
      }}
      onClick={() => alert('Open Project')}
      onEdit={() => alert('Edit')}
      onDelete={() => alert('Delete')}
    />
  </div>
);

export const Archived = () => (
  <ProjectCard
    name="Old CRM Prototype"
    description="This project has been archived."
    status="archived"
  />
);
