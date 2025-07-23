// src/ui/admin/ErrorRateGraph.tsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './ErrorRateGraph.css';
import { ErrorRateGraphProps } from './types';

export const ErrorRateGraph: React.FC<ErrorRateGraphProps> = ({
  data,
  maxHeight = '300px',
}) => {
  return (
    <div className="error-graph-wrapper" style={{ height: maxHeight }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
