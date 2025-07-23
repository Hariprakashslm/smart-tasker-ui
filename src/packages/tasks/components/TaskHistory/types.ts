export interface HistoryItem {
  id: string;
  user: string;
  action: string;
  timestamp: string;
}

export interface TaskHistoryProps {
  history: HistoryItem[];
} 