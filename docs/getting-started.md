# Getting Started

Welcome to Smart Tasker UI! This guide will help you get up and running with our component library.

## 📦 Installation

### Using npm
```bash
npm install @centralized-ui/smart-tasker-ui
```

### Using yarn
```bash
yarn add @centralized-ui/smart-tasker-ui
```

### Using pnpm
```bash
pnpm add @centralized-ui/smart-tasker-ui
```

## 🚀 Quick Start

### Basic Usage

```tsx
import React from 'react';
import { Button, Input, Card } from '@centralized-ui/smart-tasker-ui';

function App() {
  return (
    <div>
      <Card>
        <h2>Welcome to Smart Tasker</h2>
        <Input placeholder="Enter your name" />
        <Button variant="primary" onClick={() => alert('Hello!')}>
          Click me
        </Button>
      </Card>
    </div>
  );
}
```

### Importing Specific Packages

You can import components from specific packages to reduce bundle size:

```tsx
// Import only core components
import { Button, Input } from '@centralized-ui/smart-tasker-ui/core';

// Import only auth components
import { LoginForm, SignupForm } from '@centralized-ui/smart-tasker-ui/auth';

// Import only task components
import { TaskCard, TaskForm } from '@centralized-ui/smart-tasker-ui/tasks';
```

## 🎨 Styling

### CSS Import

The component library includes built-in styles. Import them in your main CSS file:

```css
@import '@centralized-ui/smart-tasker-ui/dist/style.css';
```

### Tailwind CSS Integration

If you're using Tailwind CSS, the components are designed to work seamlessly:

```tsx
import { Button } from '@centralized-ui/smart-tasker-ui';

function MyComponent() {
  return (
    <Button 
      className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600"
      variant="primary"
    >
      Custom Styled Button
    </Button>
  );
}
```

## 🔧 Configuration

### TypeScript Support

The library is written in TypeScript and includes full type definitions. No additional setup required!

### Theme Customization

You can customize the theme by overriding CSS custom properties:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --success-color: #22c55e;
  --warning-color: #f59e0b;
  --error-color: #ef4444;
}
```

## 📱 Responsive Design

All components are mobile-first and responsive by default:

```tsx
import { Button } from '@centralized-ui/smart-tasker-ui';

function ResponsiveComponent() {
  return (
    <Button 
      size="small" // xs, sm, md, lg, xl
      className="w-full md:w-auto"
    >
      Responsive Button
    </Button>
  );
}
```

## ♿ Accessibility

Components follow WCAG 2.1 AA guidelines and include:

- Proper ARIA labels
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast compliance

## 🔍 Development Tools

### Storybook

Browse all components interactively:

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
yarn install

# Start Storybook
yarn storybook
```

Visit `http://localhost:4000` to explore components.

### Component Generator

Create new components with consistent structure:

```bash
yarn make-component MyComponent core
```

This will create:
- `MyComponent.tsx` - Component implementation
- `MyComponent.css` - Component styles
- `MyComponent.test.tsx` - Component tests
- `index.ts` - Export file

## 🧪 Testing

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Run tests with coverage
yarn test:coverage

# Run tests with UI
yarn test:ui
```

### Writing Tests

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@centralized-ui/smart-tasker-ui';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

## 📚 Next Steps

- Explore the [Component Library Structure](./structure.md)
- Learn about our [Design System](./design-system.md)
- Check out [Component Guidelines](./component-guidelines.md)
- Browse [Package Documentation](./packages/README.md)

## 🤝 Getting Help

- 📖 [Documentation](./README.md)
- 🐛 [Report Issues](https://github.com/your-username/centralized-ui/issues)
- 💬 [Discussions](https://github.com/your-username/centralized-ui/discussions)
- 📧 [Contact Us](mailto:support@smart-tasker.com)

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details. 