// src/components/Tabs.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@core/Tabs';
import { TabItem } from '@/packages/core';

const meta: Meta<typeof Tabs> = {
  title: 'Packages/Core/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultActiveKey: {
      control: 'text',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const demoTabs: TabItem[] = [
  {
    key: 'overview',
    title: 'Overview',
  },
  {
    key: 'details',
    title: 'Details',
  },
  {
    key: 'settings',
    title: 'Settings',
  },
];

export const Default: Story = {
  args: {
    tabs: demoTabs,
    defaultActiveKey: 'overview',
    fullWidth: false,
  },
};

export const FullWidthTabs: Story = {
  args: {
    tabs: demoTabs,
    defaultActiveKey: 'settings',
    fullWidth: true,
  },
};
