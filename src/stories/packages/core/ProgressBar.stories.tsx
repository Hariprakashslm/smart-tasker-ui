import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressBar } from '@core/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Packages/Core/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
    },
    color: { control: 'color' },
    label: { control: 'text' },
    height: { control: { type: 'number', min: 4, max: 50, step: 2 } },
    showPercentage: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 50,
    label: 'Progress',
    height: 10,
    showPercentage: true,
  },
};

export const CustomColor: Story = {
  args: {
    value: 75,
    label: 'Custom Bar',
    color: '#ff9800',
    height: 16,
  },
};

export const NoPercentage: Story = {
  args: {
    value: 40,
    label: 'Loading...',
    showPercentage: false,
  },
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return <ProgressBar value={progress} label="Auto Progress" />;
  },
};
