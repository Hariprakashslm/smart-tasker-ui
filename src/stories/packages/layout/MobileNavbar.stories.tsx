// src/ui-stories/layout/MobileNavbar.stories.tsx
import React from 'react';
import { MobileNavbar } from 'layout/components/MobileNavbar';

export default {
  title: 'Packages/Layout/MobileNavbar',
  component: MobileNavbar,
};

export const Default = () => (
  <MobileNavbar
    title="Smart Tasker"
    onMenuToggle={() => alert('Menu toggled')}
    onAvatarClick={() => alert('Profile clicked')}
    user={{
      name: 'Hari Prakash',
      imageUrl: 'https://i.pravatar.cc/32?img=3',
    }}
  />
);
