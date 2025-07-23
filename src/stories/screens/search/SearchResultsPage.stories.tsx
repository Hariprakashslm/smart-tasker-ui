import React from 'react';
import { SearchResultsPage } from '@screens/search/SearchResultsPage';
import { Meta, StoryObj } from '@storybook/react';
import { SearchItem } from '@/packages/search';

const meta: Meta<typeof SearchResultsPage> = {
  title: 'Screens/Search/SearchResultsPage',
  component: SearchResultsPage,
};
export default meta;

type Story = StoryObj<typeof SearchResultsPage>;

const mockResults: SearchItem[] = [
  {
    id: '1',
    title: 'Fix login bug',
    type: 'task',
    description: 'User cannot log in with Google.',
  },
  {
    id: '2',
    title: 'Project Alpha',
    type: 'project',
    description: 'Main project for Q3.',
  },
  {
    id: '3',
    title: 'Alice Johnson',
    type: 'user',
    description: 'Frontend developer.',
  },
];

export const Default: Story = {
  args: {
    query: 'alpha',
    results: mockResults,
    filters: { status: 'open' },
    sort: 'relevance',
    onQueryChange: (q: string) => alert('Query: ' + q),
    onFilterChange: (f: Record<string, string | boolean>) =>
      alert('Filter: ' + JSON.stringify(f)),
    onSortChange: (s: string) => alert('Sort: ' + s),
    onResultClick: (item: { title: string }) => alert('Clicked: ' + item.title),
  },
};

export const Loading: Story = {
  args: {
    query: 'alpha',
    results: [],
    isLoading: true,
  },
};

export const NoResults: Story = {
  args: {
    query: 'beta',
    results: [],
  },
};
