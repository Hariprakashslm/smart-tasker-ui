import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@core/Checkbox';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Packages/Core/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'I agree to terms',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked by default',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    checked: false,
    disabled: true,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          args.onChange?.(e);
        }}
      />
    );
  },
  args: {
    label: 'Controlled checkbox',
  },
};
