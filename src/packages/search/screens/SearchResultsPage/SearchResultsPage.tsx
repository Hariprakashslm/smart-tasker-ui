import React from 'react';
import { SearchBar } from '@search/SearchBar';
import { FilterPanel } from '@search/FilterPanel';
import { SortSelector } from '@search/SortSelector';
import { SearchResults, SearchItem } from '@search/SearchResults';
import './SearchResultsPage.css';

export interface SearchResultsPageProps {
  query: string;
  results: SearchItem[];
  isLoading?: boolean;
  filters?: Record<string, string | boolean>;
  sort?: string;
  onQueryChange?: (query: string) => void;
  onFilterChange?: (filters: Record<string, string | boolean>) => void;
  onSortChange?: (sort: string) => void;
  onResultClick?: (item: SearchItem) => void;
}

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  query,
  results,
  isLoading = false,
  filters = {},
  sort = '',
  onQueryChange,
  onFilterChange,
  onSortChange,
  onResultClick,
}) => {
  // Default sort options
  const sortOptions = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Date', value: 'date' },
    { label: 'Title', value: 'title' },
  ];
  // Map result click
  const mappedResults = results?.map((item) => ({
    ...item,
    onClick: () => onResultClick?.(item),
  }));

  // Demo filter state (in real app, would be state/props)
  const searchValue = typeof filters === 'object' && 'search' in filters ? String(filters['search']) : '';
  const statusValue = typeof filters === 'object' && 'status' in filters ? String(filters['status']) : '';
  const statusOptions = [
    { label: 'Open', value: 'open' },
    { label: 'Closed', value: 'closed' },
    { label: 'In Progress', value: 'inprogress' },
  ];

  return (
    <div className="search-results-page">
      <div className="search-controls">
        <FilterPanel
          search={searchValue}
          onSearchChange={onQueryChange || (() => {})}
          status={statusValue}
          statusOptions={statusOptions}
          onStatusChange={onFilterChange ? (v) => onFilterChange({ ...filters, status: v }) : undefined}
        />
        <SortSelector value={sort} onChange={onSortChange || (() => {})} options={sortOptions} />
      </div>
      <SearchResults
        query={query}
        results={mappedResults}
        isLoading={isLoading}
      />
    </div>
  );
};
