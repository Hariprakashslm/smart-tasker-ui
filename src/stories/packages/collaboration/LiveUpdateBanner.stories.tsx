// src/ui-stories/packages/collaboration/LiveUpdateBanner.stories.tsx
import React from 'react';
import { LiveUpdateBanner } from '@collaboration/LiveUpdateBanner';

export default {
  title: 'Packages/Collaboration/LiveUpdateBanner',
  component: LiveUpdateBanner,
};

export const Info = () => (
  <LiveUpdateBanner message="This page updates in real time." variant="info" />
);

export const Success = () => (
  <LiveUpdateBanner message="Changes saved successfully!" variant="success" />
);

export const WarningWithAction = () => (
  <LiveUpdateBanner
    message="You're viewing an outdated version."
    variant="warning"
    actionLabel="Refresh"
    onAction={() => alert('Refreshing...')}
  />
);

export const ErrorFixed = () => (
  <LiveUpdateBanner
    message="Disconnected from server."
    variant="error"
    actionLabel="Reconnect"
    onAction={() => alert('Reconnecting...')}
    fixed
  />
);
