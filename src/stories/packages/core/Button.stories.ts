// src/components/Button.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@core/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    primary: true,
    variant: 'contained',
    size: 'medium',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    primary: false,
    variant: 'outlined',
    size: 'medium',
  },
};

export const Text: Story = {
  args: {
    label: 'Text Button',
    variant: 'text',
    size: 'medium',
    primary: false,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
    primary: true,
    variant: 'contained',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    size: 'medium',
    primary: false,
    disabled: true,
    variant: 'contained',
  },
};
