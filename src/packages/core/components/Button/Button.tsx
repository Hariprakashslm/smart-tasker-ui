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
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = '',
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  type,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type={type || 'button'}
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
