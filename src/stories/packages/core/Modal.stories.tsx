import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal, ModalProps } from '@core/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Packages/Core/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Simple Modal',
    content: 'This is a basic modal content.',
    footer: <button>OK</button>,
  },
};

export const Interactive: Story = {
  render: (args: ModalProps) => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal
          {...args}
          isOpen={open}
          onClose={() => {
            setOpen(false);
            args.onClose?.();
          }}
        />
      </>
    );
  },
  args: {
    title: 'Modal Title',
    content: 'This modal opens and closes with state.',
    footer: (
      <>
        <button onClick={() => alert('Cancel')}>Cancel</button>
        <button onClick={() => alert('Confirm')}>Confirm</button>
      </>
    ),
  },
};

export const LargeModal: Story = {
  args: {
    isOpen: true,
    title: 'Large Modal',
    size: 'large',
    content: (
      <p>
        This modal is large. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pellentesque at arcu ut nisi laoreet maximus.
      </p>
    ),
    footer: (
      <>
        <button>Cancel</button>
        <button>Submit</button>
      </>
    ),
  },
};
