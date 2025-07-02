// src/stories/admin/AdminSettings.stories.tsx
import React, { useState } from 'react';
import { AdminSettings, SettingItem } from '@screens/admin/AdminSettings';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AdminSettings> = {
  title: 'Pages/Admin/AdminSettings',
  component: AdminSettings,
};

export default meta;

type Story = StoryObj<typeof AdminSettings>;

export const Default: Story = {
  render: () => {
    const [settings, setSettings] = useState<SettingItem[]>([
      {
        label: 'Enable Notifications',
        description: 'Turn on to receive updates via email',
        type: 'toggle',
        value: true,
        onChange: (val) => updateSetting(0, val),
      },
      {
        label: 'Default Project Visibility',
        description: 'New projects will be created with this visibility',
        type: 'select',
        value: 'Private',
        options: ['Private', 'Public', 'Team Only'],
        onChange: (val) => updateSetting(1, val),
      },
      {
        label: 'Admin Contact Email',
        description: 'Used for system alerts and contact info',
        type: 'text',
        value: 'admin@example.com',
        onChange: (val) => updateSetting(2, val),
      },
    ]);

    function updateSetting(index: number, value: any) {
      const updated = [...settings];
      updated[index] = { ...updated[index], value };
      setSettings(updated);
    }

    return <AdminSettings settings={settings} />;
  },
};
