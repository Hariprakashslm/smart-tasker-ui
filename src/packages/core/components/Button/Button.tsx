// src/components/Button.tsx
import './Button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the button? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  /** Style variant: contained | outlined | text */
  variant?: 'contained' | 'outlined' | 'text';
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'contained',
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseClass = 'storybook-button';
  const sizeClass = `storybook-button--${size}`;
  const themeClass = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  const variantClass = `storybook-button--${variant}`;

  return (
    <button
      type={type}
      disabled={disabled}
      className={[baseClass, sizeClass, themeClass, variantClass].join(' ')}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {label}
    </button>
  );
};
