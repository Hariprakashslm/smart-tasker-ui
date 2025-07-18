import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button label="Click me" />);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  it('renders with primary variant', () => {
    render(<Button label="Primary Button" primary />);
    const button = screen.getByRole('button', { name: 'Primary Button' });
    expect(button).toHaveClass('storybook-button--primary');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button label="Small Button" size="small" />);
    let button = screen.getByRole('button', { name: 'Small Button' });
    expect(button).toHaveClass('storybook-button--small');

    rerender(<Button label="Large Button" size="large" />);
    button = screen.getByRole('button', { name: 'Large Button' });
    expect(button).toHaveClass('storybook-button--large');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button label="Outlined Button" variant="outlined" />);
    let button = screen.getByRole('button', { name: 'Outlined Button' });
    expect(button).toHaveClass('storybook-button--outlined');

    rerender(<Button label="Text Button" variant="text" />);
    button = screen.getByRole('button', { name: 'Text Button' });
    expect(button).toHaveClass('storybook-button--text');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Clickable Button" onClick={handleClick} />);
    
    const button = screen.getByRole('button', { name: 'Clickable Button' });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button label="Disabled Button" disabled />);
    const button = screen.getByRole('button', { name: 'Disabled Button' });
    expect(button).toBeDisabled();
  });

  it('shows loading state when isLoading is true', () => {
    render(<Button label="Loading Button" isLoading />);
    const button = screen.getByRole('button', { name: 'Loading Button' });
    expect(button).toHaveTextContent('Saving...');
  });

  it('applies custom background color', () => {
    render(<Button label="Custom Button" backgroundColor="#ff0000" />);
    const button = screen.getByRole('button', { name: 'Custom Button' });
    expect(button).toHaveStyle({ backgroundColor: '#ff0000' });
  });

  it('applies custom text color', () => {
    render(<Button label="Custom Color Button" color="#00ff00" />);
    const button = screen.getByRole('button', { name: 'Custom Color Button' });
    expect(button).toHaveStyle({ color: '#00ff00' });
  });

  it('renders with custom background color', () => {
    render(<Button label="Custom Button" backgroundColor="#ff0000" />);
    const button = screen.getByRole('button', { name: 'Custom Button' });
    expect(button).toHaveStyle({ backgroundColor: '#ff0000' });
  });
}); 