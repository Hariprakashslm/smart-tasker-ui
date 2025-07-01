import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from 'core/components/Textarea';
import React from 'react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Packages/Core/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    rows: { control: 'number' },
    cols: { control: 'number' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Comment',
    placeholder: 'Write your comment...',
    value: '',
    rows: 4,
  },
  render: (args) => {
    const [value, setValue] = React.useState(args.value);

    return (
      <TextArea
        {...args}
        value={value}
        onChange={(value) => {
          setValue(value);
          args.onChange(value);
        }}
      />
    );
  },
};

export const WithError: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Minimum 10 characters...',
    value: '',
    error: 'This field is required',
    rows: 4,
  },
  render: (args) => {
    const [value, setValue] = React.useState(args.value);

    return (
      <TextArea
        {...args}
        value={value}
        onChange={(value) => {
          setValue(value);
          args.onChange(value);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Notes',
    placeholder: 'Disabled input',
    value: 'You can’t type here',
    disabled: true,
    rows: 3,
  },
  render: (args) => {
    const [value, setValue] = React.useState(args.value);

    return (
      <TextArea
        {...args}
        value={value}
        onChange={(value) => {
          setValue(value);
          args.onChange(value);
        }}
      />
    );
  },
};
