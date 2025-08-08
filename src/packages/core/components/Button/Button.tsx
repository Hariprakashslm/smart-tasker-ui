import React from 'react';
import { Spinner } from '@core/Spinner';
import type { ButtonProps } from './types';

const COLOR_CLASS_MAP = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  success: 'bg-green-600 text-white hover:bg-green-700',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
  default: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
};

const OUTLINE_COLOR_CLASS_MAP = {
  primary: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  danger: 'border border-red-600 text-red-600 hover:bg-red-50',
  success: 'border border-green-600 text-green-600 hover:bg-green-50',
  warning: 'border border-yellow-500 text-yellow-600 hover:bg-yellow-50',
  default: 'border border-gray-300 text-gray-900 hover:bg-gray-100',
};

const TEXT_COLOR_CLASS_MAP = {
  primary: 'text-blue-600 hover:bg-blue-50',
  danger: 'text-red-600 hover:bg-red-50',
  success: 'text-green-600 hover:bg-green-50',
  warning: 'text-yellow-600 hover:bg-yellow-50',
  default: 'text-gray-900 hover:bg-gray-100',
};

const SIZE_CLASS_MAP = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
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
    let colorClass = '';
    if (variant === 'contained') {
      colorClass = COLOR_CLASS_MAP[color as keyof typeof COLOR_CLASS_MAP] || COLOR_CLASS_MAP.default;
    } else if (variant === 'outlined') {
      colorClass = OUTLINE_COLOR_CLASS_MAP[color as keyof typeof OUTLINE_COLOR_CLASS_MAP] || OUTLINE_COLOR_CLASS_MAP.default;
    } else if (variant === 'text' || variant === 'ghost') {
      colorClass = TEXT_COLOR_CLASS_MAP[color as keyof typeof TEXT_COLOR_CLASS_MAP] || TEXT_COLOR_CLASS_MAP.default;
    }

    const baseClass =
      'inline-flex items-center justify-center font-medium focus:outline-none transition-colors duration-150';
    const sizeClass = SIZE_CLASS_MAP[size as keyof typeof SIZE_CLASS_MAP] || SIZE_CLASS_MAP.medium;
    const widthClass = fullWidth ? 'w-full' : '';
    const roundedClass = rounded ? 'rounded-full' : 'rounded-md';
    const customRadius = borderRadius ? { borderRadius } : {};
    const opacityClass = (disabled || isLoading) ? 'opacity-60 cursor-not-allowed' : '';

    return (
      <button
        type={type}
        disabled={disabled || isLoading}
        className={[
          baseClass,
          colorClass,
          sizeClass,
          widthClass,
          roundedClass,
          opacityClass,
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
        style={{ ...customRadius, ...style }}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 flex items-center">
            {spinner || <Spinner size="small" label="Loading..." />}
          </span>
        )}
        {!isLoading && startIcon && (
          <span className="mr-2 flex items-center">{startIcon}</span>
        )}
        {!isLoading && <span>{label}</span>}
        {!isLoading && endIcon && (
          <span className="ml-2 flex items-center">{endIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
