export interface SummaryItem {
  label: string;
  value: string | number;
}

export interface BarChartData {
  name: string;
  tasks: number;
}

export interface LineChartData {
  date: string;
  activity: number;
}

export interface PieChartData {
  name: string;
  value: number;
}

export interface ReportsAnalyticsProps {
  summary: SummaryItem[];
  barData: BarChartData[];
  lineData: LineChartData[];
  pieData: PieChartData[];
} 