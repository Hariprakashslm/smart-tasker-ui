// src/ui-stories/common/SearchBar.stories.tsx
import React, { useState } from 'react';
import { SearchBar } from 'search/SearchBar';

export default {
  title: 'Packages/Search/SearchBar',
  component: SearchBar,
};

export const WithClearButton = () => {
  const [query, setQuery] = useState('');
  return (
    <div style={{ padding: 20 }}>
      <SearchBar
        value={query}
        onChange={setQuery}
        onClear={() => setQuery('')}
      />
    </div>
  );
};
