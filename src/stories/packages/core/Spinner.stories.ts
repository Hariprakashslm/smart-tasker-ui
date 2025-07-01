import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from 'core/components/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Packages/Core/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'color',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 'medium',
    color: '#333',
    label: 'Loading...',
  },
};

export const LargeBlue: Story = {
  args: {
    size: 'large',
    color: '#007bff',
    label: 'Fetching data...',
  },
};

export const NoLabel: Story = {
  args: {
    size: 'small',
    color: '#666',
    label: '',
  },
};
