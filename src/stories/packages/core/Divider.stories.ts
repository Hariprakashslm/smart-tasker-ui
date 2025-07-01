import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from 'core/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Packages/Core/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
    text: { control: 'text' },
    textAlign: { control: 'radio', options: ['left', 'center', 'right'] },
    thickness: { control: 'text' },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    text: 'Section Title',
    textAlign: 'center',
  },
};

export const LeftText: Story = {
  args: {
    text: 'Left Aligned',
    textAlign: 'left',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
};

export const CustomStyle: Story = {
  args: {
    text: 'Thick Divider',
    thickness: '3px',
    color: '#ff5722',
  },
};
