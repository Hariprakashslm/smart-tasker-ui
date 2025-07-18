import React from 'react';
import {
  CalendarViewPage,
  CalendarViewPageProps,
  CalendarEvent,
} from '@screens/tasks/CalendarViewPage';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CalendarViewPage> = {
  title: 'Screens/Tasks/CalendarViewPage',
  component: CalendarViewPage,
};
export default meta;

type Story = StoryObj<typeof CalendarViewPage>;

const today = new Date();
const iso = (d: Date) => d.toISOString().slice(0, 10);

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Design Review',
    date: iso(today),
    type: 'event',
    color: '#fbbf24',
  },
  {
    id: '2',
    title: 'Finish API',
    date: iso(new Date(today.getTime() + 86400000)),
    type: 'task',
    color: '#60a5fa',
  },
  {
    id: '3',
    title: 'Team Standup',
    date: iso(new Date(today.getTime() + 2 * 86400000)),
    type: 'event',
    color: '#34d399',
  },
  {
    id: '4',
    title: 'Write Docs',
    date: iso(new Date(today.getTime() + 2 * 86400000)),
    type: 'task',
    color: '#818cf8',
  },
];

export const Default: Story = {
  args: {
    events: mockEvents,
  },
};

export const NoEvents: Story = {
  args: {
    events: [],
  },
};

export const OnlyTasks: Story = {
  args: {
    events: mockEvents.filter((e) => e.type === 'task'),
  },
};

export const OnlyEvents: Story = {
  args: {
    events: mockEvents.filter((e) => e.type === 'event'),
  },
};

export const WithEventClick: Story = {
  args: {
    events: mockEvents,
    onEventClick: (event: CalendarEvent) => alert('Clicked: ' + event.title),
  },
};
