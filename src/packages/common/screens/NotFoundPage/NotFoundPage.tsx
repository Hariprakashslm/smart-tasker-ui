// src/ui/common/NotFoundPage.tsx
import React from 'react';
import './NotFoundPage.css';

export interface NotFoundPageProps {
  onBackToHome?: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onBackToHome }) => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <p className="not-found-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button className="not-found-button" onClick={onBackToHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
};
