import type { SearchItem } from '../../components/SearchResults/types';

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