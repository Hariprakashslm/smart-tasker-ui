// src/pages/dashboard/DashboardOverview.tsx
import React from 'react';
import './DashboardOverview.css';
import { StatCard, StatCardProps } from '../../components/StatCard';
import { OverviewGraph } from '../../components/OverviewGraph';
import { TaskCompletionChart } from '../../components/TaskCompletionChart';
import { StorageUsageCard } from '../../components/StorageUsageCard';
import { PresenceIndicator } from '@collaboration/PresenceIndicator';
import { TypingIndicator } from '@collaboration/TypingIndicator';

export const DashboardOverview: React.FC = () => {
  const taskStats: StatCardProps[] = [
    { title: 'Tasks Completed', value: '45', icon: '✅', variant: 'success' },
    { title: 'In Progress', value: '12', icon: '🕒', variant: 'success' },
    { title: 'Pending Review', value: '3', icon: '🧐', variant: 'warning' },
  ];

  const graphData = [
    { label: 'Mon', value: 3 },
    { label: 'Tue', value: 7 },
    { label: 'Wed', value: 4 },
    { label: 'Thu', value: 6 },
    { label: 'Fri', value: 9 },
    { label: 'Sat', value: 2 },
    { label: 'Sun', value: 5 },
  ];

  const activeUsers = [
    { id: '1', name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', name: 'Bob', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
    { id: '3', name: 'Charlie', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
  ];

  return (
    <div className="dashboard-overview">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="stat-grid">
        {taskStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="chart-section">
        <OverviewGraph
          title="Weekly Task Activity"
          data={graphData}
          type="line"
        />
        <TaskCompletionChart completed={45} total={60} />
        <StorageUsageCard used={4.6} total={10} />
      </div>

      <div className="collab-section">
        <PresenceIndicator users={activeUsers} label="Online Now" />
        <TypingIndicator users={activeUsers.slice(0, 2)} />
      </div>
    </div>
  );
};
