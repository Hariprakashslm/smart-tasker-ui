import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { sample } from '../../../packages/page/sample/sample';

const meta = {
  title: 'sample/Sample',
  component: sample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof sample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginsample = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginsample).toBeInTheDocument();
    await userEvent.click(loginsample);
    await expect(loginsample).not.toBeInTheDocument();

    const logoutsample = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutsample).toBeInTheDocument();
  },
};
