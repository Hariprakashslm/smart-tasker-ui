import React, { useEffect } from 'react';
import './Drawer.css';
import { AttachmentPreview } from '@tasks/AttachmentPreview';
import type { DrawerProps } from './types';

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position = 'right',
  size = 'medium',
  width,
  content,
  title,
  header,
  attachments,
  onRemove,
  className = '',
  style = {},
  closeIcon,
  ariaLabel = 'Drawer',
  overlayClassName = '',
  overlayStyle = {},
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const sizeMap: Record<string, string> = {
    small: '300px',
    medium: '500px',
    large: '700px',
  };

  const drawerWidth = width || sizeMap[size] || size;

  return (
    <>
      {isOpen && (
        <div
          className={["drawer-overlay", overlayClassName].filter(Boolean).join(' ')}
          onClick={onClose}
          style={overlayStyle}
        />
      )}
      <div
        className={[
          'drawer',
          `drawer-${position}`,
          isOpen ? 'drawer-open' : '',
          className,
        ].filter(Boolean).join(' ')}
        style={{ width: drawerWidth, ...style }}
        aria-label={ariaLabel}
        role="dialog"
        aria-modal="true"
      >
        <div className="drawer-header">
          {header ? header : title && <h3>{title}</h3>}
          <button className="drawer-close" onClick={onClose} aria-label="Close drawer">
            {closeIcon || '×'}
          </button>
        </div>
        <div className="drawer-body">
          {content}
          {attachments && <AttachmentPreview attachments={attachments} onRemove={onRemove} />}
        </div>
      </div>
    </>
  );
};
