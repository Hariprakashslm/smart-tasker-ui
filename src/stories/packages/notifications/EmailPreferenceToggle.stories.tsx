// src/ui-stories/settings/EmailPreferenceToggle.stories.tsx
import React, { useState } from 'react';
import { EmailPreferenceToggle } from 'notifications/components/EmailPreferenceToggle';

export default {
  title: 'Packages/Notifications/EmailPreferenceToggle',
  component: EmailPreferenceToggle,
};

export const Default = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <EmailPreferenceToggle
      label="Mentions & Comments"
      description="Get email when someone mentions you."
      checked={enabled}
      onChange={setEnabled}
    />
  );
};

export const Disabled = () => (
  <EmailPreferenceToggle
    label="Task Reminders"
    description="This setting is managed by your admin."
    checked={true}
    disabled={true}
    onChange={() => {}}
  />
);
