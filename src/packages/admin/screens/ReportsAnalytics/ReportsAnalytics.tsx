import React from 'react';
import './ReportsAnalytics.css';
import { ReportsAnalyticsProps } from './types';

// For demonstration, use a simple chart library like recharts (or mock components)
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#6366f1', '#f59e42', '#10b981', '#ef4444', '#fbbf24'];

export const ReportsAnalytics: React.FC<ReportsAnalyticsProps> = ({
  summary,
  barData,
  lineData,
  pieData,
}) => {
  return (
    <div className="reports-analytics-page">
      <h1>Reports & Analytics</h1>
      <div className="reports-summary">
        {summary.map((item) => (
          <div className="summary-card" key={item.label}>
            <div className="summary-value">{item.value}</div>
            <div className="summary-label">{item.label}</div>
          </div>
        ))}
      </div>
      <div className="reports-charts">
        <div className="chart-card">
          <h3>Tasks Completed (Bar)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasks" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-card">
          <h3>Activity Over Time (Line)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="activity" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-card">
          <h3>Task Distribution (Pie)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                {pieData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}; 