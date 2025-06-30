import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from 'core/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Packages/Core/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'danger'],
    },
    disabled: { control: 'boolean' },
    onRemove: { action: 'removed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'Default Tag',
    color: 'default',
  },
};

export const Removable: Story = {
  args: {
    label: 'Removable Tag',
    color: 'primary',
  },
  render: (args) => <Tag {...args} onRemove={() => args.onRemove?.()} />,
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Tag',
    color: 'success',
    disabled: true,
  },
};

export const Danger: Story = {
  args: {
    label: 'Delete Me',
    color: 'danger',
    onRemove: () => {},
  },
};
