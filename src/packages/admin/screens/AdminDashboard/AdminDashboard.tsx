// src/ui/admin/AdminDashboard.tsx
import React from 'react';
import { Card } from '@core/Card';
import { Badge } from '@core/Badge';
import { Avatar } from '@core/Avatar';
import { Tooltip } from '@core/Tooltip';
import './AdminDashboard.css';

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

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  stats,
  activities,
}) => {
  return (
    <div className="admin-dashboard">
      {/* Stats */}
      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <Card key={index}>
            <span className="stat-count">{stat.count}</span>
            <Badge color={stat.color || 'gray'}>{stat.label}</Badge>
          </Card>
        ))}
      </div>

      {/* Activities */}
      <div className="dashboard-activities">
        <h2 className="activity-title">Recent Activity</h2>
        {activities.map((activity, index) => (
          <Card key={index}>
            <Tooltip content={activity.user}>
              <Avatar name={activity.user} src={activity.avatarUrl} />
            </Tooltip>
            <div className="activity-content">
              <p className="activity-text">
                <strong>{activity.user}</strong> {activity.action}
              </p>
              <p className="activity-time">{activity.timestamp}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
