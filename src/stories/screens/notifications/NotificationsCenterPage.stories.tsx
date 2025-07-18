import React from 'react';
import {
  NotificationsCenterPage,
  NotificationsCenterPageProps,
} from '@screens/notifications/NotificationsCenterPage';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationsCenterPage> = {
  title: 'Screens/Notifications/NotificationsCenterPage',
  component: NotificationsCenterPage,
};
export default meta;

type Story = StoryObj<typeof NotificationsCenterPage>;

const mockNotifications = [
  {
    id: '1',
    title: 'New comment',
    message: 'Alice commented on your task',
    time: '2m ago',
    read: false,
  },
  {
    id: '2',
    title: 'Task assigned',
    message: 'You were assigned a new task',
    time: '10m ago',
    read: false,
  },
  {
    id: '3',
    title: 'System update',
    message: 'System will be down at 2am',
    time: '1h ago',
    read: true,
  },
];

export const Default: Story = {
  args: {
    notifications: mockNotifications,
    onMarkRead: (id: string) => alert('Mark read: ' + id),
    onClearAll: () => alert('Clear all notifications'),
  },
};

export const NoNotifications: Story = {
  args: {
    notifications: [],
  },
};

export const AllRead: Story = {
  args: {
    notifications: mockNotifications.map((n) => ({ ...n, read: true })),
  },
};

export const WithClearAll: Story = {
  args: {
    notifications: mockNotifications,
    onClearAll: () => alert('Clear all notifications'),
  },
};
