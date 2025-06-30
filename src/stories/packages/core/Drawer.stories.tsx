import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from 'core/Drawer';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'Packages/Core/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const BasicDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Drawer</button>
        <Drawer isOpen={open} onClose={() => setOpen(false)} title="My Drawer">
          <p>This is the drawer content.</p>
        </Drawer>
      </>
    );
  },
};

export const LeftDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Left Drawer</button>
        <Drawer
          isOpen={open}
          onClose={() => setOpen(false)}
          position="left"
          title="Left Side"
        >
          <p>Drawer from left side.</p>
        </Drawer>
      </>
    );
  },
};

export const CustomSizeDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Wide Drawer</button>
        <Drawer
          isOpen={open}
          onClose={() => setOpen(false)}
          size="800px"
          title="Wide Drawer"
        >
          <p>This is a wide drawer (800px).</p>
        </Drawer>
      </>
    );
  },
};
