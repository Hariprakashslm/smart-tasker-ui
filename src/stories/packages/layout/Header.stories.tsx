// src/ui-stories/layout/Header.stories.tsx
import React from 'react';
import { Header } from 'layout/components/Header';

export default {
  title: 'Packages/Layout/Header',
  component: Header,
};

export const FullHeader = () => (
  <Header
    title="Tasks"
    onSearch={(val) => console.log('Search:', val)}
    unreadNotifications={2}
    onNotificationClick={() => alert('Notifications clicked')}
    user={{
      name: 'Hari Prakash',
      imageUrl: 'https://i.pravatar.cc/32?img=5',
      onProfile: () => alert('Profile'),
      onLogout: () => alert('Logout'),
    }}
  />
);

export const WithThemeToggle = () => (
  <Header
    title="Dashboard"
    onSearch={(val) => console.log('Search:', val)}
    unreadNotifications={1}
    onNotificationClick={() => alert('Bell clicked')}
    user={{
      name: 'Hari',
      imageUrl: 'https://i.pravatar.cc/32?img=8',
      onProfile: () => alert('Profile'),
      onLogout: () => alert('Logout'),
    }}
  />
);
