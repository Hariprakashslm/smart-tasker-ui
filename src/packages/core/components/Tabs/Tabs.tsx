// src/components/Tabs.tsx
import React, { useState } from 'react';
import './Tabs.css';

export interface TabItem {
  key: string;
  title: string;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  fullWidth?: boolean;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveKey,
  onChange,
  fullWidth = false,
}) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey ?? tabs[0]?.key);

  const handleTabClick = (key: string) => {
    setActiveKey(key);
    onChange?.(key);
  };

  return (
    <div className="tabs">
      <div className={`tabs-header ${fullWidth ? 'tabs-full' : ''}`}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab-button ${activeKey === tab.key ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.key)}
            role="tab"
            aria-selected={activeKey === tab.key}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};
