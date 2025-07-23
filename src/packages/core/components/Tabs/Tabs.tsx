// src/components/Tabs.tsx
import React, { useState } from 'react';
import './Tabs.css';
import type { TabItem, TabsProps } from './types';

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
