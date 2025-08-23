# React TypeScript Template

A modern, responsive React application template built with TypeScript, styled-components, and comprehensive development tooling.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- **Styled Components**: CSS-in-JS styling with styled-components
- **Component Documentation**: Storybook for component showcase and documentation
- **Type Safety**: Full TypeScript support with strict type checking
- **Performance Optimized**: Fast development and build times with Vite
- **Accessible**: WCAG compliant components with proper ARIA attributes
- **Responsive Design**: Mobile-first approach with responsive layouts

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2
- **Styling**: styled-components 6.1.19
- **Package Manager**: pnpm 10.15.0
- **Component Documentation**: Storybook 8.6.14
- **Testing**: Vitest 3.2.4
- **Linting**: ESLint + Prettier
- **Code Quality**: TypeScript strict mode, ESLint rules

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Button.tsx      # Button component with variants
│   ├── Button.stories.tsx  # Storybook stories
│   └── index.ts        # Component exports
├── assets/             # Static assets and resources
│   └── index.ts        # Asset exports
├── App.tsx             # Main application component
├── App.css             # App-specific styles
├── main.tsx           # Application entry point
├── index.css          # Global styles
└── vite-env.d.ts      # Vite type definitions

.storybook/             # Storybook configuration
├── main.ts            # Storybook main config
├── preview.ts         # Storybook preview config
└── preview-head.html  # Storybook head HTML
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-typescript-template
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm serve
   ```
   The app will be available at `http://localhost:5173`

## 📚 Available Scripts

| Script                 | Description              |
| ---------------------- | ------------------------ |
| `pnpm serve`           | Start development server |
| `pnpm build`           | Build for production     |
| `pnpm preview`         | Preview production build |
| `pnpm lint`            | Run ESLint               |
| `pnpm storybook`       | Start Storybook          |
| `pnpm build-storybook` | Build Storybook          |

## 🎨 Component Development

### Creating New Components

1. **Create component file** in `src/components/`
2. **Add TypeScript interfaces** for props
3. **Use styled-components** for styling
4. **Create Storybook stories** for documentation
5. **Export from index.ts**

### Example Component Structure

```typescript
// src/components/MyComponent.tsx
import React from 'react';
import styled from 'styled-components';

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

const StyledComponent = styled.div`
  // styled-components styles
`;

export const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return (
    <StyledComponent onClick={onClick}>
      {title}
    </StyledComponent>
  );
};
```

### Storybook Stories

```typescript
// src/components/MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Hello World' },
};
```

## 🎯 Development Guidelines

### Code Style

- **TypeScript**: Use strict mode, avoid `any` type
- **React**: Functional components with hooks
- **Styling**: styled-components with proper TypeScript support
- **Naming**: PascalCase for components, camelCase for functions
- **Imports**: Organized imports with proper grouping

### Component Best Practices

- **Single Responsibility**: One component, one purpose
- **Props Interface**: Always define TypeScript interfaces
- **Accessibility**: Include ARIA attributes and keyboard navigation
- **Performance**: Use React.memo, useCallback, useMemo when needed
- **Testing**: Write unit tests for component behavior

### Styled Components

- **Naming**: Use descriptive names (e.g., `StyledButton`)
- **Props**: Prefix with `$` to avoid DOM attribute conflicts
- **Conditional Styling**: Use template literals with props
- **Theme**: Use theme for consistent styling (when implemented)

### Template Customization

- **Project Name**: Update the title and description in `index.html`
- **Branding**: Replace placeholder content with your project details
- **Styling**: Customize the theme and color scheme in styled-components
- **Components**: Add or modify components based on your project needs

## 🧪 Testing

The project uses Vitest for testing. Run tests with:

```bash
pnpm test
```

### Testing Guidelines

- **Unit Tests**: Test individual component behavior
- **Integration Tests**: Test component interactions
- **Accessibility Tests**: Test with screen readers and keyboard navigation
- **Visual Tests**: Use Storybook for visual regression testing

## 📖 Storybook

Storybook provides component documentation and testing environment.

### Starting Storybook

```bash
pnpm storybook
```

### Storybook Features

- **Component Showcase**: Visual documentation of all components
- **Interactive Testing**: Test component variants and states
- **Accessibility Testing**: Built-in accessibility checks
- **Responsive Testing**: Test components at different screen sizes

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting

- **Vercel**: Zero-config deployment with Git integration
- **Netlify**: Easy deployment with form handling
- **GitHub Pages**: Free hosting for public repositories
- **Firebase Hosting**: Google's hosting solution
- **AWS S3 + CloudFront**: Scalable static hosting
- **Azure Static Web Apps**: Microsoft's hosting solution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Convention

Use conventional commit messages:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `chore:` Build process or auxiliary tool changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [styled-components](https://styled-components.com/) - CSS-in-JS
- [Storybook](https://storybook.js.org/) - Component documentation
- [Vitest](https://vitest.dev/) - Testing framework

## 📝 Template Usage

This template provides a solid foundation for building modern React applications. It includes:

- **Production-ready setup** with optimized build configuration
- **Component library** with Storybook documentation
- **Type safety** with strict TypeScript configuration
- **Code quality** with ESLint and Prettier
- **Testing infrastructure** with Vitest
- **Modern styling** with styled-components

Use this template as a starting point for your next React project!
