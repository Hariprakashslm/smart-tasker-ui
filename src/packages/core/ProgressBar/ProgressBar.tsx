import React from 'react';
import './ProgressBar.css';

export interface ProgressBarProps {
  value: number; // 0 to 100
  label?: string;
  color?: string;
  height?: number; // px
  showPercentage?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  color = '#4caf50',
  height = 10,
  showPercentage = true,
}) => {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className="progressbar-wrapper">
      {label && <div className="progressbar-label">{label}</div>}
      <div className="progressbar-track" style={{ height }}>
        <div
          className="progressbar-fill"
          style={{
            width: `${safeValue}%`,
            backgroundColor: color,
          }}
        />
      </div>
      {showPercentage && (
        <div className="progressbar-percentage">{safeValue}%</div>
      )}
    </div>
  );
};
