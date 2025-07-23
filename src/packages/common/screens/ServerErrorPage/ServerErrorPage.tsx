// src/ui/common/ServerErrorPage.tsx
import React from 'react';
import './ServerErrorPage.css';
import { ServerErrorPageProps } from './types';

export const ServerErrorPage: React.FC<ServerErrorPageProps> = ({
  onRetry,
}) => {
  return (
    <div className="server-error-container">
      <div className="server-error-content">
        <h1 className="server-error-code">500</h1>
        <p className="server-error-message">
          Something went wrong on our end. Please try again later.
        </p>
        <button className="server-error-button" onClick={onRetry}>
          Retry
        </button>
      </div>
    </div>
  );
};
