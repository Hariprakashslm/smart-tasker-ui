// src/ui-stories/layout/Sidebar.stories.tsx
import React, { useState } from 'react';
import { Sidebar } from 'layout/Sidebar';

export default {
  title: 'Packages/Layout/Sidebar',
  component: Sidebar,
};

export const Default = () => {
  const [activePath, setActivePath] = useState('/dashboard');

  const navItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: '🏠',
      active: activePath === '/dashboard',
    },
    {
      label: 'Projects',
      path: '/projects',
      icon: '📁',
      active: activePath === '/projects',
    },
    {
      label: 'Tasks',
      path: '/tasks',
      icon: '✅',
      active: activePath === '/tasks',
    },
    {
      label: 'Settings',
      path: '/settings',
      icon: '⚙️',
      active: activePath === '/settings',
    },
  ];

  return (
    <div style={{ height: '100vh' }}>
      <Sidebar
        appName="Smart Tasker"
        navItems={navItems}
        onNavigate={(path) => setActivePath(path)}
      />
    </div>
  );
};
