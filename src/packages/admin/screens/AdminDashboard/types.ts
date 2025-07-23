export interface DashboardStats {
  label: string;
  count: number;
  color?: string;
}

export interface RecentActivity {
  user: string;
  avatarUrl?: string;
  action: string;
  timestamp: string;
}

export interface AdminDashboardProps {
  stats: DashboardStats[];
  activities: RecentActivity[];
} 