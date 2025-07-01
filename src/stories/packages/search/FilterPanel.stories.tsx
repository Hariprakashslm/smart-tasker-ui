// src/ui-stories/common/FilterPanel.stories.tsx
import React, { useState } from 'react';
import { FilterPanel } from 'search/FilterPanel';

export default {
  title: 'Packages/Search/FilterPanel',
  component: FilterPanel,
};

export const Default = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [assignee, setAssignee] = useState('');

  const statusOptions = [
    { label: 'All', value: '' },
    { label: 'Todo', value: 'todo' },
    { label: 'In Progress', value: 'in-progress' },
    { label: 'Done', value: 'done' },
  ];

  const assigneeOptions = [
    { label: 'All', value: '' },
    { label: 'Alice', value: 'alice' },
    { label: 'Bob', value: 'bob' },
    { label: 'Charlie', value: 'charlie' },
  ];

  const clearAll = () => {
    setSearch('');
    setStatus('');
    setAssignee('');
  };

  const apply = () => {
    alert(
      `Applied filters:\nSearch: ${search}\nStatus: ${status}\nAssignee: ${assignee}`
    );
  };

  return (
    <div style={{ maxWidth: 800, padding: 20 }}>
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
        onClearAll={clearAll}
        onApply={apply}
      />
    </div>
  );
};
