import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from 'core/components/Switch';
import React from 'react';

const meta: Meta<typeof Switch> = {
  title: 'Packages/Core/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'toggled' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Enable feature',
    checked: false,
  },
  render: (args) => {
    const [value, setValue] = React.useState(args.checked);

    return (
      <Switch
        {...args}
        checked={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val); // Logs to Storybook actions
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    checked: true,
    disabled: true,
  },
  render: (args) => <Switch {...args} onChange={() => {}} />,
};

export const LabelOnly: Story = {
  args: {
    label: 'Label only switch',
    checked: true,
  },
  render: (args) => {
    const [value, setValue] = React.useState(args.checked);

    return (
      <Switch
        {...args}
        checked={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
    );
  },
};
