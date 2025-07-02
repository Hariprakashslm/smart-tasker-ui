// src/ui-stories/common/SortSelector.stories.tsx
import React, { useState } from 'react';
import { SortSelector } from '@search/SortSelector';

export default {
  title: 'Packages/Search/SortSelector',
  component: SortSelector,
};

export const Default = () => {
  const [sortKey, setSortKey] = useState('createdAt');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <SortSelector
        value={sortKey}
        onChange={setSortKey}
        direction={sortDir}
        onDirectionToggle={() =>
          setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'))
        }
        options={[
          { label: 'Created Date', value: 'createdAt' },
          { label: 'Title', value: 'title' },
          { label: 'Priority', value: 'priority' },
        ]}
      />
      <p style={{ marginTop: 16 }}>
        <strong>Sort:</strong> {sortKey} ({sortDir})
      </p>
    </div>
  );
};
