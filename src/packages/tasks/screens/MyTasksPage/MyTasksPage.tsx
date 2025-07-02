// src/pages/tasks/MyTasksPage.tsx
import React, { useState } from 'react';
import './MyTasksPage.css';
import { TaskCard } from '@tasks/TaskCard';
import { FilterPanel } from '@search/FilterPanel';

export const MyTasksPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [assignee, setAssignee] = useState('');

  const statusOptions = [
    { label: 'To Do', value: 'todo' },
    { label: 'In Progress', value: 'in-progress' },
    { label: 'Done', value: 'done' },
  ];

  const assigneeOptions = [
    { label: 'You', value: 'you' },
    { label: 'Alice', value: 'alice' },
    { label: 'Bob', value: 'bob' },
  ];

  const tasks = [
    {
      id: '1',
      title: 'Fix login flow',
      description: 'Fix bug on login with Google',
      status: 'in-progress',
      dueDate: '2025-07-10',
      completed: false,
      assignee: {
        name: 'You',
        imageUrl: 'https://i.pravatar.cc/150?img=11',
      },
    },
    {
      id: '2',
      title: 'Design review',
      description: 'Review new Figma wireframes',
      status: 'todo',
      dueDate: '2025-07-03',
      completed: false,
      assignee: {
        name: 'Alice',
        imageUrl: 'https://i.pravatar.cc/150?img=12',
      },
    },
    {
      id: '3',
      title: 'Update documentation',
      status: 'done',
      completed: true,
      dueDate: '2025-06-28',
      assignee: {
        name: 'You',
        imageUrl: 'https://i.pravatar.cc/150?img=11',
      },
    },
  ];

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus = !status || task.status === status;
    const matchesAssignee =
      !assignee || task.assignee?.name.toLowerCase() === assignee.toLowerCase();
    return matchesSearch && matchesStatus && matchesAssignee;
  });

  return (
    <div className="my-tasks-page">
      <h2 className="my-tasks-title">My Tasks</h2>

      <div className="my-tasks-header">
        <FilterPanel
          search={search}
          onSearchChange={setSearch}
          onClearSearch={() => setSearch('')}
          status={status}
          statusOptions={statusOptions}
          onStatusChange={setStatus}
          assignee={assignee}
          assigneeOptions={assigneeOptions}
          onAssigneeChange={setAssignee}
          onClearAll={() => {
            setSearch('');
            setStatus('');
            setAssignee('');
          }}
          onApply={() => console.log('Filter applied')}
        />
      </div>

      <div className="my-tasks-list">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status as any}
            dueDate={task.dueDate}
            completed={task.completed}
            assignee={task.assignee}
          />
        ))}
      </div>
    </div>
  );
};
