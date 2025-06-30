import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { PresenceIndicator } from 'collaboration/PresenceIndicator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Packages/Collaboration/PresenceIndicator',
  component: PresenceIndicator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof PresenceIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'PresenceIndicator',
  },
};

export const Secondary: Story = {
  args: {
    label: 'PresenceIndicator',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'PresenceIndicator',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'PresenceIndicator',
  },
};
