export interface GraphDataPoint {
  label: string;
  value: number;
}

export interface OverviewGraphProps {
  title?: string;
  data: GraphDataPoint[];
  type?: 'line' | 'bar';
  height?: number;
} 