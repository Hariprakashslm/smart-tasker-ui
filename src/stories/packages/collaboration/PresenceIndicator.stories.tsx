// src/ui-stories/packages/collaboration/PresenceIndicator.stories.tsx
import React from 'react';
import { PresenceIndicator } from 'collaboration/components/PresenceIndicator';

export default {
  title: 'Packages/Collaboration/PresenceIndicator',
  component: PresenceIndicator,
};

const mockUsers = [
  { id: '1', name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Bob', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: 'Charlie', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'Diana', avatarUrl: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', name: 'Eli', avatarUrl: 'https://i.pravatar.cc/150?img=5' },
];

export const Default = () => (
  <PresenceIndicator users={mockUsers.slice(0, 3)} />
);

export const WithLabel = () => (
  <PresenceIndicator users={mockUsers} label="Collaborating" />
);

export const NoUsers = () => <PresenceIndicator users={[]} />;
