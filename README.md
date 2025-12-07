# ToDoDevSecOpsGUI

A modern React application built with Vite, TypeScript, and a E2E testing setup using Playwright.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting with React-specific rules
- **Playwright** - End-to-end testing

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npx playwright test` - Run E2E tests
- `npx playwright test --ui` - Run E2E tests in UI mode
- `npx playwright test --debug` - Run E2E tests in debug mode

## Testing

### E2E Tests

End-to-end tests are written using Playwright and located in the `tests-e2e` directory.

Run E2E tests:
```bash
npx playwright test
```

## Project Structure

```
.
├── src/
│   ├── App.tsx               # Main App component
│   └── main.tsx              # Application entry point
├── tests-e2e/
│   └── example.spec.ts       # E2E test examples
├── playwright.config.ts      # Playwright configuration
├── vite.config.ts           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── tsconfig.json            # TypeScript configuration
```


## License

MIT
