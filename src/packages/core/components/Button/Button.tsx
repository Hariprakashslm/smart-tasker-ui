import React from 'react';
import { Spinner } from '@core/Spinner';
import './Button.css';
import type { ButtonProps } from './types';

const COLOR_CLASS_MAP = {
  primary: 'storybook-button--primary',
  danger: 'storybook-button--danger',
  success: 'storybook-button--success',
  warning: 'storybook-button--warning',
  default: 'storybook-button--default',
};

export const Button = React.memo(
  ({
    label,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    onClick,
    disabled = false,
    isLoading = false,
    startIcon,
    endIcon,
    fullWidth = false,
    rounded = false,
    borderRadius,
    spinner,
    className = '',
    style = {},
    ariaLabel,
    type = 'button',
    form,
    autoFocus,
    tabIndex,
    ...props
  }: ButtonProps) => {
    const baseClass = 'storybook-button';
    const sizeClass = `storybook-button--${size}`;
    const colorClass =
      COLOR_CLASS_MAP[color as keyof typeof COLOR_CLASS_MAP] || '';
    const variantClass = `storybook-button--${variant}`;
    const widthClass = fullWidth ? 'storybook-button--full-width' : '';
    const roundedClass = rounded ? 'storybook-button--rounded' : '';

    // Allow custom color override
    const customColor =
      color && !COLOR_CLASS_MAP[color as keyof typeof COLOR_CLASS_MAP]
        ? ({ '--btn-main': color } as React.CSSProperties)
        : {};
    // Allow custom border radius
    const customRadius = borderRadius ? { borderRadius } : {};

    return (
      <button
        type={type}
        disabled={disabled || isLoading}
        className={[
          baseClass,
          sizeClass,
          colorClass,
          variantClass,
          widthClass,
          roundedClass,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        aria-label={ariaLabel || label}
        aria-disabled={disabled || isLoading}
        onClick={onClick}
        form={form}
        autoFocus={autoFocus}
        tabIndex={tabIndex}
        style={{ ...customColor, ...customRadius, ...style }}
        {...props}
      >
        {isLoading && (
          <span className="storybook-button__spinner">
            {spinner || <Spinner size="small" label="Loading..." />}
          </span>
        )}
        {!isLoading && startIcon && (
          <span className="storybook-button__icon storybook-button__icon--start">
            {startIcon}
          </span>
        )}
        {!isLoading && <span className="storybook-button__label">{label}</span>}
        {!isLoading && endIcon && (
          <span className="storybook-button__icon storybook-button__icon--end">
            {endIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
