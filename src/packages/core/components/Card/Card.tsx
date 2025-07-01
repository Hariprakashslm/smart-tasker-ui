import React from 'react';
import './Card.css';

export interface CardProps {
  title?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  imageUrl?: string;
  children?: React.ReactNode;
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  content,
  footer,
  imageUrl,
  children,
  shadow = true,
}) => {
  return (
    <div className={`card ${shadow ? 'card-shadow' : ''}`}>
      {imageUrl && (
        <img
          className="card-image"
          src={imageUrl}
          alt={title || 'Card image'}
        />
      )}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <div className="card-content">{content}</div>}
        {children}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
