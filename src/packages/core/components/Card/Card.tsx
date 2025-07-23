import React from 'react';
import './Card.css';
import type { CardProps } from './types';

export const Card: React.FC<CardProps> = ({
  title,
  content,
  header,
  footer,
  imageUrl,
  image,
  imageAlt,
  imageStyle = {},
  shadow = true,
  borderRadius,
  background,
  padding,
  className = '',
  style = {},
  titleClassName = '',
  contentClassName = '',
  footerClassName = '',
  ariaLabel,
  role = 'region',
  children,
}) => {
  return (
    <div
      className={['card', shadow ? 'card-shadow' : '', className].filter(Boolean).join(' ')}
      style={{
        borderRadius,
        background,
        ...style,
      }}
      aria-label={ariaLabel}
      role={role}
    >
      {header && <div className="card-header">{header}</div>}
      {(image || imageUrl) && (
        <div className="card-image-wrap">
          {image ? (
            image
          ) : (
            <img
              className="card-image"
              src={imageUrl}
              alt={imageAlt || title || 'Card image'}
              style={imageStyle}
            />
          )}
        </div>
      )}
      <div className="card-body" style={padding ? { padding } : {}}>
        {title && <h3 className={["card-title", titleClassName].filter(Boolean).join(' ')}>{title}</h3>}
        {content && <div className={["card-content", contentClassName].filter(Boolean).join(' ')}>{content}</div>}
        {children}
      </div>
      {footer && <div className={["card-footer", footerClassName].filter(Boolean).join(' ')}>{footer}</div>}
    </div>
  );
};
