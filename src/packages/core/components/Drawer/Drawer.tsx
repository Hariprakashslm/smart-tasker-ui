import React, { useEffect } from 'react';
import './Drawer.css';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
  size?: 'small' | 'medium' | 'large' | string;
  children: React.ReactNode;
  title?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position = 'right',
  size = 'medium',
  children,
  title,
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

  const drawerWidth = sizeMap[size] || size;

  return (
    <>
      {isOpen && <div className="drawer-overlay" onClick={onClose} />}
      <div
        className={`drawer drawer-${position} ${isOpen ? 'drawer-open' : ''}`}
        style={{ width: drawerWidth }}
      >
        <div className="drawer-header">
          {title && <h3>{title}</h3>}
          <button className="drawer-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="drawer-body">{children}</div>
      </div>
    </>
  );
};
