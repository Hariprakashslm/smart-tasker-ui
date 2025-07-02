// src/stories/common/ServerErrorPage.stories.tsx
import React from 'react';
import { ServerErrorPage } from '@screens/common/ServerErrorPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ServerErrorPage> = {
  title: 'Pages/Common/ServerErrorPage',
  component: ServerErrorPage,
};

export default meta;

type Story = StoryObj<typeof ServerErrorPage>;

export const Default: Story = {
  args: {
    onRetry: () => alert('Retrying...'),
  },
};
