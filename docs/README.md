# Smart Tasker UI Documentation

Welcome to the Smart Tasker UI component library documentation. This guide will help you understand the structure, usage, and best practices for using our components.

## 📚 Table of Contents

- [Getting Started](./getting-started.md)
- [Component Library Structure](./structure.md)
- [Design System](./design-system.md)
- [Component Guidelines](./component-guidelines.md)
- [Package Documentation](./packages/README.md)
- [Migration Guide](./migration-guide.md)
- [Contributing](./contributing.md)

## 🚀 Quick Start

```bash
# Install the library
npm install @centralized-ui/smart-tasker-ui

# Import components
import { Button, Input, Card } from '@centralized-ui/smart-tasker-ui';
```

## 📦 Package Structure

Our component library is organized into logical packages:

- **`core`** - Foundation UI components
- **`auth`** - Authentication components
- **`tasks`** - Task management components
- **`projects`** - Project management components
- **`boards`** - Kanban board components
- **`dashboard`** - Analytics and overview components
- **`admin`** - Administrative interface components
- **`layout`** - Layout components
- **`notifications`** - Notification system components
- **`collaboration`** - Real-time collaboration features

## 🎨 Design System

Our design system provides:

- **Consistent Theming** - Unified color palette and spacing
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 AA compliant
- **TypeScript Support** - Full type safety
- **Customization** - Themeable components

## 🔧 Development

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
yarn install

# Start Storybook
yarn storybook

# Create a new component
yarn make-component MyComponent core

# Build the library
yarn build:all
```

## 📖 Component Usage

Each component follows a consistent API pattern:

```tsx
import { Button } from '@centralized-ui/smart-tasker-ui';

function MyComponent() {
  return (
    <Button 
      variant="primary" 
      size="medium" 
      onClick={() => console.log('clicked')}
    >
      Click me
    </Button>
  );
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./contributing.md) for details on:

- Code style and conventions
- Component development guidelines
- Testing requirements
- Pull request process

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details. 