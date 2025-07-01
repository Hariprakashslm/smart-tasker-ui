// src/packages/dashboard/OverviewGraph.tsx
import React from 'react';
import './OverviewGraph.css';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';

export interface GraphDataPoint {
  label: string; // e.g., "Mon", "Jan", "Q1"
  value: number;
}

export interface OverviewGraphProps {
  title?: string;
  data: GraphDataPoint[];
  type?: 'line' | 'bar';
  height?: number;
}

export const OverviewGraph: React.FC<OverviewGraphProps> = ({
  title = 'Overview',
  data,
  type = 'line',
  height = 260,
}) => {
  return (
    <div className="overview-graph">
      <div className="overview-title">{title}</div>
      <ResponsiveContainer width="100%" height={height}>
        {type === 'line' ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};
