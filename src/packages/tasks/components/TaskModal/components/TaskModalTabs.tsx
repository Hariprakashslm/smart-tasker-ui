import React from 'react';
import { Tabs, TabItem } from '@core/Tabs';
import './TaskModalTabs.css';

export interface TaskModalTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  enableDependencies?: boolean;
  enableTimeTracking?: boolean;
  showHistoryTab?: boolean; // new prop
}

export const TaskModalTabs: React.FC<TaskModalTabsProps> = ({
  activeTab,
  onTabChange,
  enableDependencies = true,
  enableTimeTracking = true,
  showHistoryTab = true,
}) => {
  const tabs: TabItem[] = [
    { key: 'details', title: 'Details' },
    { key: 'attachments', title: 'Attachments' },
    { key: 'comments', title: 'Comments' },
    ...(enableDependencies ? [{ key: 'dependencies', title: 'Dependencies' }] : []),
    ...(enableTimeTracking ? [{ key: 'time', title: 'Time Tracking' }] : []),
    ...(showHistoryTab ? [{ key: 'history', title: 'History' }] : []),
  ];

  return (
    <div className="task-modal-tabs">
      <Tabs tabs={tabs} onChange={onTabChange} />
    </div>
  );
}; 