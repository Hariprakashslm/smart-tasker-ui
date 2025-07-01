// src/stories/projects/LiveUpdateBanner.stories.tsx
import React from 'react';
import { LiveUpdateBanner } from './LiveUpdateBanner';
import type { Meta, StoryObj } from '@storybook/react';
import './LiveUpdateBanner.css';

const meta: Meta<typeof LiveUpdateBanner> = {
  title: 'Projects/LiveUpdateBanner',
  component: LiveUpdateBanner,
};

export default meta;

type Story = StoryObj<typeof LiveUpdateBanner>;

export const Default: Story = {
  args: {
    message: 'Project was updated 3 seconds ago.',
    autoHideDuration: 6000,
  },
};

export const Persistent: Story = {
  args: {
    message: 'A new member was added to the project.',
    autoHideDuration: 0, // won't auto-dismiss
  },
};
