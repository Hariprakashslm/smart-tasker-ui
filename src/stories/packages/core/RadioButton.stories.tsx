import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioButton, RadioButtonProps } from '@core/RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Packages/Core/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: 'framework',
    label: 'Choose a framework:',
    selectedValue: 'react',
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular', value: 'angular' },
    ],
  },
  render: (args: RadioButtonProps) => {
    const [selected, setSelected] = React.useState(args.selectedValue);

    return (
      <RadioButton
        {...args}
        selectedValue={selected}
        onChange={(val) => {
          setSelected(val);
          args.onChange?.(val);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    name: 'framework',
    label: 'Disabled selection',
    selectedValue: 'vue',
    disabled: true,
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
    ],
  },
};
