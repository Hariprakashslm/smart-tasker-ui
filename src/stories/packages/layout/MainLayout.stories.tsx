// src/ui-stories/layout/MainLayout.stories.tsx
import React from 'react';
import { MainLayout } from 'layout/MainLayout';

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

export const Default = () => (
  <MainLayout
    pageTitle="Dashboard"
    user={mockUser}
    unreadNotifications={2}
    showSearch
  >
    <div style={{ padding: 16 }}>
      <h1>Welcome to Smart Tasker 👋</h1>
      <p>This is your main content area. You can put anything here.</p>
    </div>
  </MainLayout>
);
