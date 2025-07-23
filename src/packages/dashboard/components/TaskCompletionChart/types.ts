export interface TaskCompletionChartProps {
  completed: number;
  total: number;
  width?: number;
  height?: number;
  colors?: {
    completed?: string;
    remaining?: string;
  };
} 