import React from 'react';
import './Divider.css';
import type { DividerProps } from './types';

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  text,
  textAlign = 'center',
  thickness = '1px',
  color = '#ccc',
}) => {
  const isVertical = orientation === 'vertical';
  const dividerStyle = {
    borderColor: color,
    borderWidth: thickness,
  };

  return (
    <div
      className={`divider ${
        isVertical ? 'divider-vertical' : 'divider-horizontal'
      } ${text ? `divider-with-text align-${textAlign}` : ''}`}
    >
      {!isVertical && text && <span className="divider-text">{text}</span>}
      {!text && <hr style={dividerStyle} />}
    </div>
  );
};
