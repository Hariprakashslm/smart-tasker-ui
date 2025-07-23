// src/pages/projects/ProjectDetailsPage.tsx
import React from 'react';
import './ProjectDetailsPage.css';
import { BoardColumn } from '@boards/BoardColumn';
import { PresenceIndicator } from '@collaboration/PresenceIndicator';
import { FileList } from '@files/FileList';
import { BoardColumnProps } from '@/packages/boards';

export const ProjectDetailsPage: React.FC = () => {
  const project = {
    id: 'p1',
    name: 'Smart Tasker Redesign',
    description:
      'Improve UI/UX, migrate to centralized component system, and simplify flows.',
    members: [
      { id: '1', name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
      { id: '2', name: 'Bob', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
    ],
  };

  const columns: BoardColumnProps[] = [
    {
      status: 'todo',
      title: 'To Do',
      tasks: [
        {
          title: 'Complete dashboard UI',
          description: 'Finish designing the dashboard layout and add charts.',
          dueDate: '2025-07-10',
          status: 'in-progress',
          completed: false,
        },
        {
          title: 'Complete dashboard UI',
          description: 'Finish designing the dashboard layout and add charts.',
          dueDate: '2025-07-10',
          status: 'in-progress',
          completed: false,
        },
        {
          title: 'Complete dashboard UI',
          description: 'Finish designing the dashboard layout and add charts.',
          dueDate: '2025-07-10',
          status: 'in-progress',
          completed: false,
        },
      ],
    },
    {
      status: 'in-progress',
      title: 'In Progress',
      tasks: [
        {
          title: 'Complete dashboard UI',
          description: 'Finish designing the dashboard layout and add charts.',
          dueDate: '2025-07-10',
          status: 'in-progress',
          completed: false,
        },
        {
          title: 'Complete dashboard UI',
          description: 'Finish designing the dashboard layout and add charts.',
          dueDate: '2025-07-10',
          status: 'in-progress',
          completed: false,
        },
        {
          title: 'Complete dashboard UI',
          description: 'Finish designing the dashboard layout and add charts.',
          dueDate: '2025-07-10',
          status: 'in-progress',
          completed: false,
        },
      ],
    },
    {
      status: 'done',
      title: 'Done',
      tasks: [
        {
          title: 'Complete dashboard UI',
          description: 'Finish designing the dashboard layout and add charts.',
          dueDate: '2025-07-10',
          status: 'in-progress',
          completed: false,
        },
        {
          title: 'Complete dashboard UI',
          description: 'Finish designing the dashboard layout and add charts.',
          dueDate: '2025-07-10',
          status: 'in-progress',
          completed: false,
        },
        {
          title: 'Complete dashboard UI',
          description: 'Finish designing the dashboard layout and add charts.',
          dueDate: '2025-07-10',
          status: 'in-progress',
          completed: false,
        },
      ],
    },
  ];

  const files = [
    {
      fileName: 'proposal.pdf',
      fileUrl:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
    {
      fileName: 'team-photo.jpg',
      fileUrl: 'https://via.placeholder.com/150',
      download: true,
    },
    {
      fileName: 'notes.txt',
      fileUrl: 'https://example.com/notes.txt',
    },
    {
      fileName: 'archive_2023_backup_config_longname.json',
      fileUrl: 'https://example.com/archive.json',
    },
  ];

  return (
    <div className="project-details-page">
      <h2 className="project-title">{project.name}</h2>
      <p className="project-description">{project.description}</p>

      <PresenceIndicator users={project.members} label="Members" />

      <div className="kanban-board">
        {columns.map((col) => (
          <BoardColumn
            key={col.status}
            status={col.status}
            title={col.title}
            tasks={col.tasks}
          />
        ))}
      </div>

      <div className="project-files">
        <h3>Files</h3>
        <FileList files={files} />
      </div>
    </div>
  );
};
