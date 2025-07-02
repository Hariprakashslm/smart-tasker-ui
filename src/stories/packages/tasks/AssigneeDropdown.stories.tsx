// src/ui-stories/tasks/AssigneeDropdown.stories.tsx
import React, { useState } from 'react';
import { AssigneeDropdown, Assignee } from '@tasks/AssigneeDropdown';

export default {
  title: 'Packages/Tasks/AssigneeDropdown',
  component: AssigneeDropdown,
};

const users: Assignee[] = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
];

export const Default = () => {
  const [selectedId, setSelectedId] = useState<string | null>('1');

  return (
    <div style={{ width: 250 }}>
      <AssigneeDropdown
        assignees={users}
        selectedId={selectedId}
        onSelect={(id) => setSelectedId(id)}
      />
    </div>
  );
};
