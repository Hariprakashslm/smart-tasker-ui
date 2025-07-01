// src/ui-stories/packages/collaboration/TypingIndicator.stories.tsx
import React from 'react';
import { TypingIndicator } from 'collaboration/TypingIndicator';

export default {
  title: 'Packages/Collaboration/TypingIndicator',
  component: TypingIndicator,
};

const mockUsers = [
  { id: '1', name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'Bob', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: 'Charlie', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'Diana', avatarUrl: 'https://i.pravatar.cc/150?img=4' },
];

export const OneTyping = () => <TypingIndicator users={[mockUsers[0]]} />;
export const TwoTyping = () => (
  <TypingIndicator users={[mockUsers[0], mockUsers[1]]} />
);
export const ManyTyping = () => <TypingIndicator users={mockUsers} />;
export const NoneTyping = () => <TypingIndicator users={[]} />;
