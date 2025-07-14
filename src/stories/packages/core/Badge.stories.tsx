import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@core/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Packages/Core/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info', 'default'],
    },
    showDot: { control: 'boolean' },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const WithNumber: Story = {
  args: {
    text: 5,
    type: 'success',
    children: <button className="badge-btn">Notifications</button>,
  },
};

export const DotOnly: Story = {
  args: {
    showDot: true,
    type: 'error',
    children: <span className="badge-btn">Messages</span>,
  },
};

export const CustomContent: Story = {
  args: {
    text: 'New!',
    type: 'warning',
    children: <div className="badge-btn">Label</div>,
  },
};
