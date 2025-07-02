// src/ui-stories/common/NotificationBell.stories.tsx
import React, { useState } from 'react';
import { NotificationBell } from '@notifications/NotificationBell';

export default {
  title: 'Packages/Notifications/NotificationBell',
  component: NotificationBell,
};

export const Default = () => (
  <NotificationBell count={5} onClick={() => alert('Open panel')} />
);

export const NoNotifications = () => <NotificationBell count={0} />;

export const MaxCount = () => <NotificationBell count={128} />;
