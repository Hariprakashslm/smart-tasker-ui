import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@core/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Packages/Core/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    name: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    shape: { control: 'select', options: ['circle', 'square'] },
    showStatus: { control: 'boolean' },
    status: { control: 'radio', options: ['online', 'offline'] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const ImageAvatar: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    name: 'Jane Doe',
    size: 'medium',
    shape: 'circle',
  },
};

export const InitialsFallback: Story = {
  args: {
    name: 'John Doe',
    size: 'large',
    shape: 'square',
  },
};

export const WithStatus: Story = {
  args: {
    name: 'Alex',
    showStatus: true,
    status: 'online',
  },
};
