import type { Meta, StoryObj } from '@storybook/react';
import { TaskCard } from '@tasks/TaskCard';

const meta: Meta<typeof TaskCard> = {
  title: 'Packages/Tasks/TaskCard',
  component: TaskCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskCard>;

export const Default: Story = {
  args: {
    title: 'Complete dashboard UI',
    description: 'Finish designing the dashboard layout and add charts.',
    dueDate: '2025-07-10',
    status: 'in-progress',
    completed: false,
    assignee: {
      name: 'Hari Prakash',
      imageUrl: 'https://i.pravatar.cc/40?img=3',
    },
    onToggleComplete: (checked: React.ChangeEvent<HTMLInputElement>) =>
      alert(`Task complete: ${checked}`),
  },
};

export const Completed: Story = {
  args: {
    title: 'Setup CI/CD pipeline',
    status: 'done',
    completed: true,
    assignee: {
      name: 'Aditi K.',
    },
  },
};

export const WithoutAssignee: Story = {
  args: {
    title: 'Write unit tests',
    description: 'Cover core components with tests.',
    status: 'todo',
    completed: false,
  },
};
