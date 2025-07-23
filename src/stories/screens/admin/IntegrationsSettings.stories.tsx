import React from 'react';
import {
  IntegrationsSettings,
  IntegrationsSettingsProps,
} from '@screens/admin/IntegrationsSettings';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IntegrationsSettings> = {
  title: 'Screens/Admin/IntegrationsSettings',
  component: IntegrationsSettings,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof IntegrationsSettings>;

const mockIntegrations = [
  {
    id: 'slack',
    name: 'Slack',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg',
    connected: true,
  },
  {
    id: 'gdrive',
    name: 'Google Drive',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googledrive.svg',
    connected: false,
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg',
    connected: false,
  },
];

const mockSettings = {
  language: 'en',
  timezone: 'UTC',
  theme: 'system',
};

const baseArgs: IntegrationsSettingsProps = {
  integrations: mockIntegrations,
  settings: mockSettings,
  onConnect: (id) => alert(`Connect: ${id}`),
  onDisconnect: (id) => alert(`Disconnect: ${id}`),
  onUpdateSetting: (key, value) => alert(`Setting ${key}: ${value}`),
};

export const Default: Story = {
  args: {
    ...baseArgs,
  },
};

export const DarkMode: Story = {
  args: {
    ...baseArgs,
    settings: { ...mockSettings, theme: 'dark' },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
