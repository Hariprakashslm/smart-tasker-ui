import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from 'core/Tooltip';
import { Button } from 'core/Button';

const meta = {
  title: 'Packages/Core/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip text shown on hover/focus',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the tooltip',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'top',
    delay: 300,
    children: <Button label=" Hover me"></Button>,
  },
  // render: (args) => (
  //   <Tooltip {...args}>
  //     <button className="px-4 py-2 bg-blue-600 text-white rounded">
  //       Hover me1
  //     </button>
  //   </Tooltip>
  // ),
};
