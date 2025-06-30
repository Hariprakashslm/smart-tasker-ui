import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from 'core/EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Packages/Core/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};

export const WithIconAndAction: Story = {
  args: {
    icon: (
      <span role="img" aria-label="folder">
        📂
      </span>
    ),
    title: 'No files found',
    description: 'You haven’t added any files yet.',
    action: <button onClick={() => alert('Create new')}>Create New</button>,
  },
};

export const Custom: Story = {
  args: {
    icon: <span style={{ fontSize: 48 }}>🚫</span>,
    title: 'No Access',
    description: 'You do not have permission to view this content.',
  },
};
