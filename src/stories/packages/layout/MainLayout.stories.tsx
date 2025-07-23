// src/ui-stories/layout/MainLayout.stories.tsx
import React from 'react';
import { MainLayout } from '@layout/MainLayout';

export default {
  title: 'Packages/Layout/MainLayout',
  component: MainLayout,
};

const mockUser = {
  name: 'Hari Prakash',
  imageUrl: 'https://i.pravatar.cc/32?img=4',
  onProfile: () => alert('Profile clicked'),
  onLogout: () => alert('Logged out'),
};

export const Default = () => {
  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: '🏠', active: true },
    { label: 'Projects', path: '/projects', icon: '📁' },
    { label: 'Tasks', path: '/tasks', icon: '✅' },
    { label: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  const onNavigate = (path: string) => {
    alert(path);
  };

  return (
    <MainLayout
      pageTitle="Dashboard"
      user={mockUser}
      unreadNotifications={2}
      showSearch
      navItems={navItems}
      appName="Smart Tasker"
      onNavigate={onNavigate}
    >
      <div style={{ padding: 16 }}>
        <h1>Welcome to Smart Tasker 👋</h1>
        <p>This is your main content area. You can put anything here.</p>
      </div>
    </MainLayout>
  );
};
