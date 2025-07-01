// src/stories/search/SearchResults.stories.tsx
import React from 'react';
import { SearchResults } from './SearchResults';
import type { Meta, StoryObj } from '@storybook/react';
import './SearchResults.css';

const meta: Meta<typeof SearchResults> = {
  title: 'Search/SearchResults',
  component: SearchResults,
};

export default meta;

type Story = StoryObj<typeof SearchResults>;

export const Default: Story = {
  args: {
    query: 'marketing',
    isLoading: false,
    results: [
      {
        id: '1',
        title: 'Marketing Revamp Project',
        type: 'project',
        description: 'Redesign and relaunch marketing assets for Q3',
        onClick: () => alert('Opening project...'),
      },
      {
        id: '2',
        title: 'Update Landing Page',
        type: 'task',
        description: 'Revise CTA and testimonials section',
        onClick: () => alert('Opening task...'),
      },
      {
        id: '3',
        title: 'Jane Doe',
        type: 'user',
        description: 'Marketing Manager',
        onClick: () => alert('Opening user profile...'),
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    query: 'dashboard',
    isLoading: true,
    results: [],
  },
};

export const Empty: Story = {
  args: {
    query: 'nothing',
    isLoading: false,
    results: [],
  },
};
