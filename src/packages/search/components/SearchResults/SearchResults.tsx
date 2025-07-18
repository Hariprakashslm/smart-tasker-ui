// src/ui/search/SearchResults.tsx
import React from 'react';
import './SearchResults.css';

export interface SearchItem {
  id: string;
  title: string;
  type: 'task' | 'project' | 'user';
  description?: string;
  onClick?: () => void;
}

export interface SearchResultsProps {
  query: string;
  results: SearchItem[];
  isLoading?: boolean;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  query,
  results,
  isLoading = false,
}) => {
  return (
    <div className="search-results-container">
      <h2 className="search-title">Results for: "{query}"</h2>

      {isLoading ? (
        <div className="search-loading">Searching...</div>
      ) : results?.length === 0 ? (
        <div className="search-empty">No results found.</div>
      ) : (
        <ul className="search-list">
          {results?.map((item) => (
            <li key={item.id} className="search-item" onClick={item.onClick}>
              <div className="search-item-type">{item.type.toUpperCase()}</div>
              <div className="search-item-title">{item.title}</div>
              {item.description && (
                <div className="search-item-desc">{item.description}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
