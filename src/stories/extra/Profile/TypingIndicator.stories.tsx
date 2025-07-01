// src/stories/tasks/TypingIndicator.stories.tsx
import React from 'react';
import { TypingIndicator } from './TypingIndicator';
import type { Meta, StoryObj } from '@storybook/react';
import './TypingIndicator.css';

const meta: Meta<typeof TypingIndicator> = {
  title: 'Tasks/TypingIndicator',
  component: TypingIndicator,
};

export default meta;

type Story = StoryObj<typeof TypingIndicator>;

export const Default: Story = {
  args: {
    usersTyping: ['Hari', 'Jane'],
  },
};

export const SingleUser: Story = {
  args: {
    usersTyping: ['Hari'],
  },
};

export const NoOne: Story = {
  args: {
    usersTyping: [],
  },
};
