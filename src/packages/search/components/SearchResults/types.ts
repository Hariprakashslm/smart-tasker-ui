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