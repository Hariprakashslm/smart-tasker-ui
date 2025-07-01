// src/ui/projects/LiveUpdateBanner.tsx
import React, { useEffect, useState } from 'react';
import './LiveUpdateBanner.css';

export interface LiveUpdateBannerProps {
  message: string;
  autoHideDuration?: number; // milliseconds
}

export const LiveUpdateBanner: React.FC<LiveUpdateBannerProps> = ({
  message,
  autoHideDuration = 5000,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoHideDuration > 0) {
      const timeout = setTimeout(() => setVisible(false), autoHideDuration);
      return () => clearTimeout(timeout);
    }
  }, [autoHideDuration]);

  if (!visible) return null;

  return (
    <div className="live-update-banner">
      <span className="live-update-dot" />
      <span>{message}</span>
      <button className="live-update-close" onClick={() => setVisible(false)}>
        ×
      </button>
    </div>
  );
};
