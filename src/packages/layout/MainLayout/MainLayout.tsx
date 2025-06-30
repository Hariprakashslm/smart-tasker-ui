// src/ui/layout/MainLayout.tsx
import React, { useState } from 'react';
import './MainLayout.css';

import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
import { MobileNavbar } from '../MobileNavbar';
import { OfflineBanner } from '../OfflineBanner';

export interface MainLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  user?: {
    name: string;
    imageUrl?: string;
    onProfile: () => void;
    onLogout: () => void;
  };
  showSearch?: boolean;
  unreadNotifications?: number;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  pageTitle = 'Dashboard',
  user,
  showSearch = false,
  unreadNotifications = 0,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="main-layout">
      <OfflineBanner />

      {/* Mobile Nav */}
      <div className="main-layout-mobile-header">
        <MobileNavbar
          title={pageTitle}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          user={user}
          onAvatarClick={user?.onProfile}
        />
      </div>

      {/* Sidebar (visible on desktop or if toggled on mobile) */}
      <aside className={`main-layout-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="main-layout-content">
        <Header
          title={pageTitle}
          onSearch={showSearch ? (v) => console.log('Search:', v) : undefined}
          unreadNotifications={unreadNotifications}
          user={user}
        />

        <main className="main-layout-main">{children}</main>
      </div>
    </div>
  );
};
