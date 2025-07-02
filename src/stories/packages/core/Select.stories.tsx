import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from '@core/Select';

const meta: Meta<typeof Select> = {
  title: 'Packages/Core/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  args: {
    label: 'Select framework',
    value: '',
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
    ],
    placeholder: 'Choose one...',
  },
  render: (args) => {
    const [val, setVal] = React.useState(args.value);

    return (
      <Select
        {...args}
        value={val}
        onChange={(value) => {
          setVal(value);
          args.onChange?.(value);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled select',
    value: 'react',
    disabled: true,
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
    ],
  },
};

export const WithDefault: Story = {
  args: {
    label: 'Default to Vue',
    value: 'vue',
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
    ],
  },
  render: (args) => {
    const [val, setVal] = React.useState(args.value);

    return (
      <Select
        {...args}
        value={val}
        onChange={(value) => {
          setVal(value);
          args.onChange?.(value);
        }}
      />
    );
  },
};
