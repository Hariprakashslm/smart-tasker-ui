import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@core/Card';

const meta: Meta<typeof Card> = {
  title: 'Packages/Core/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    imageUrl: { control: 'text' },
    footer: { control: 'text' },
    shadow: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    title: 'Card Title',
    content:
      'This is the content inside the card. It can be dynamic or static.',
    footer: 'Footer text',
    shadow: true,
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    content: 'This card has a top image.',
    imageUrl: 'https://via.placeholder.com/400x200',
    footer: 'Click to learn more',
  },
};

export const NoShadow: Story = {
  args: {
    title: 'Flat Card',
    content: 'Card without shadow styling.',
    shadow: false,
  },
};
