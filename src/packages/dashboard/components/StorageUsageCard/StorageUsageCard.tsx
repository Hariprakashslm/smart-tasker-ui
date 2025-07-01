// src/packages/dashboard/StorageUsageCard.tsx
import React from 'react';
import './StorageUsageCard.css';

export interface StorageUsageCardProps {
  total: number; // in GB
  used: number; // in GB
  unit?: string; // default: "GB"
  label?: string;
}

export const StorageUsageCard: React.FC<StorageUsageCardProps> = ({
  total,
  used,
  unit = 'GB',
  label = 'Storage Usage',
}) => {
  const percent = Math.min(100, Math.round((used / total) * 100));
  const barColor =
    percent >= 90 ? 'bg-red' : percent >= 75 ? 'bg-yellow' : 'bg-green';

  return (
    <div className="storage-usage-card">
      <div className="storage-label">{label}</div>
      <div className="storage-summary">
        {used.toFixed(1)} {unit} of {total} {unit} used
      </div>
      <div className="storage-bar">
        <div
          className={`storage-fill ${barColor}`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="storage-percent">{percent}%</div>
    </div>
  );
};
