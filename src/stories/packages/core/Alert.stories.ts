import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from 'core/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Packages/Core/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    message: { control: 'text' },
    description: { control: 'text' },
    closable: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Info Alert',
    description: 'This is an informational message.',
    closable: true,
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Success!',
    description: 'Your action was successful.',
    closable: true,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Warning!',
    description: 'Be cautious with this action.',
    closable: true,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Error Occurred',
    description: 'Something went wrong. Please try again.',
    closable: true,
  },
};
