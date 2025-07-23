// src/packages/dashboard/TaskCompletionChart.tsx
import React from 'react';
import './TaskCompletionChart.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import type { TaskCompletionChartProps } from './types';

export const TaskCompletionChart: React.FC<TaskCompletionChartProps> = ({
  completed,
  total,
  width = 220,
  height = 180,
  colors = {
    completed: '#10b981', // green
    remaining: '#e5e7eb', // gray-200
  },
}) => {
  const remaining = Math.max(0, total - completed);
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const data = [
    { name: 'Completed', value: completed },
    { name: 'Remaining', value: remaining },
  ];

  const colorMap = [colors.completed, colors.remaining];

  return (
    <div className="task-completion-chart">
      <div className="chart-label">{percent}% Complete</div>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={50}
            outerRadius={70}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={colorMap[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
