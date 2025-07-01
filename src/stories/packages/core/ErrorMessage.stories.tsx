import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from 'core/components/ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Packages/Core/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    message: 'Something went wrong. Please try again.',
  },
};

export const WithCustomIcon: Story = {
  args: {
    message: 'Invalid email address',
    icon: (
      <span role="img" aria-label="error">
        ❌
      </span>
    ),
  },
};

export const EmptyMessage: Story = {
  args: {
    message: '',
  },
};
