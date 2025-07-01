// src/ui-stories/tasks/TaskForm.stories.tsx
import React from 'react';
import { TaskForm } from 'tasks/components/TaskForm';

export default {
  title: 'Packages/Tasks/TaskForm',
  component: TaskForm,
};

const assignees = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
];

const labels = [
  { label: 'Bug', value: 'bug', color: '#f44336' },
  { label: 'Feature', value: 'feature', color: '#2196f3' },
];

export const Default = () => (
  <div style={{ width: 400 }}>
    <TaskForm
      allAssignees={assignees}
      availableLabels={labels}
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
      onCancel={() => alert('Cancelled')}
    />
  </div>
);
