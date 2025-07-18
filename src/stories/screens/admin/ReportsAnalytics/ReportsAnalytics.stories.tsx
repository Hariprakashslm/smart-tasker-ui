import React from 'react';
import {
  ReportsAnalytics,
  ReportsAnalyticsProps,
} from '@screens/admin/ReportsAnalytics';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ReportsAnalytics> = {
  title: 'Screens/Admin/ReportsAnalytics',
  component: ReportsAnalytics,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof ReportsAnalytics>;

const mockSummary = [
  { label: 'Total Tasks', value: 1240 },
  { label: 'Completed', value: 980 },
  { label: 'Overdue', value: 32 },
  { label: 'Active Users', value: 57 },
];

const mockBarData = [
  { name: 'Jan', tasks: 120 },
  { name: 'Feb', tasks: 140 },
  { name: 'Mar', tasks: 180 },
  { name: 'Apr', tasks: 160 },
  { name: 'May', tasks: 210 },
];

const mockLineData = [
  { date: '2024-01-01', activity: 30 },
  { date: '2024-02-01', activity: 45 },
  { date: '2024-03-01', activity: 60 },
  { date: '2024-04-01', activity: 55 },
  { date: '2024-05-01', activity: 80 },
];

const mockPieData = [
  { name: 'To Do', value: 400 },
  { name: 'In Progress', value: 300 },
  { name: 'Done', value: 540 },
];

const baseArgs: ReportsAnalyticsProps = {
  summary: mockSummary,
  barData: mockBarData,
  lineData: mockLineData,
  pieData: mockPieData,
};

export const Default: Story = {
  args: {
    ...baseArgs,
  },
};

export const DarkMode: Story = {
  args: {
    ...baseArgs,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
