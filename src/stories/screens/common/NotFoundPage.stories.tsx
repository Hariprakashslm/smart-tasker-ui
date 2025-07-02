// src/stories/common/NotFoundPage.stories.tsx
import React from 'react';
import { NotFoundPage } from '@screens/common/NotFoundPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotFoundPage> = {
  title: 'Pages/Common/NotFoundPage',
  component: NotFoundPage,
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {
  args: {
    onBackToHome: () => alert('Navigating to Home...'),
  },
};
