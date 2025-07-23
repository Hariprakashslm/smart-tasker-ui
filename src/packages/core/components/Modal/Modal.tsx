import React, { useEffect } from 'react';
import './Modal.css';
import type { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  header,
  footer,
  size = 'medium',
  width,
  className = '',
  style = {},
  closeIcon,
  ariaLabel = 'Modal',
  overlayClassName = '',
  overlayStyle = {},
  onOverlayClick,
}) => {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const sizeMap: Record<string, string> = {
    small: '300px',
    medium: '500px',
    large: '800px',
  };
  const modalWidth = width || sizeMap[size] || size;

  return (
    <div
      className={["modal-overlay", overlayClassName].filter(Boolean).join(' ')}
      onClick={onOverlayClick || onClose}
      style={overlayStyle}
    >
      <div
        className={["modal-container", `modal-${size}`, className].filter(Boolean).join(' ')}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        style={{ width: modalWidth, ...style }}
      >
        {header ? (
          <div className="modal-header">{header}</div>
        ) : title ? (
          <div className="modal-header"><h2>{title}</h2></div>
        ) : null}
        <div className="modal-body">{content}</div>
        {footer && <div className="modal-footer">{footer}</div>}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          {closeIcon || '×'}
        </button>
      </div>
    </div>
  );
};
