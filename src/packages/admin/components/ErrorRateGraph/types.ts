export interface ErrorRatePoint {
  time: string; // e.g. "14:00", "12 PM", "2024-06-20"
  count: number;
}

export interface ErrorRateGraphProps {
  data: ErrorRatePoint[];
  maxHeight?: string;
}
