# ToDoDevSecOpsGUI

A modern React application built with Vite, TypeScript, and a E2E testing setup using Playwright.

> **Backend API:** This frontend application connects to the backend API located at [https://github.com/christojor/ToDoDevSecOpsMinimalAPI](https://github.com/christojor/ToDoDevSecOpsMinimalAPI)

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router v7** - Client-side routing
- **TanStack Query** - Server state management and caching
- **Axios** - HTTP client with interceptors
- **Tailwind CSS v4** - Utility-first CSS framework
- **Material Icons** - Google Material Symbols Outlined
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

The test suite includes 10 comprehensive tests covering:
- Navigation and routing across all pages
- Active link highlighting
- Page titles and heading hierarchy
- Responsive navigation (mobile and desktop)
- Error state handling when backend is unavailable
- Static content verification on Home and About pages

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── Layout.tsx           # Layout with header, navbar, and footer
│   │   ├── Navbar.tsx           # Navigation component
│   │   └── ErrorBoundary.tsx    # Error boundary component
│   ├── pages/
│   │   ├── Home.tsx             # Home page
│   │   ├── Todos.tsx            # Todo list page with CRUD operations
│   │   ├── About.tsx            # About page
│   │   └── NotFound.tsx         # 404 page
│   ├── hooks/
│   │   └── useTodoApi.ts        # React Query hooks for API
│   ├── services/
│   │   └── todo.service.ts      # API service layer with error handling
│   ├── lib/
│   │   └── axios.ts             # Axios instance with interceptors
│   ├── types/
│   │   └── api.types.ts         # TypeScript interfaces for API
│   ├── App.tsx                  # Main App with QueryClientProvider
│   ├── index.css                # Global styles with Tailwind
│   └── main.tsx                 # Application entry point
├── tests-e2e/
│   └── app.spec.ts              # E2E test suite (10 tests)
├── public/
│   └── favicon.svg              # Custom favicon
├── .env.example                 # Environment variables template
├── .env.local                   # Local environment configuration
├── playwright.config.ts         # Playwright configuration
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
└── tsconfig.json               # TypeScript configuration
```

## Features

### Routing
- Client-side routing with React Router v7
- Multiple pages: Home, Todos, About, and 404
- Active link highlighting in navigation
- Smooth page transitions

### State Management
- TanStack Query for server state management with caching
- Automatic background refetching and cache invalidation
- React hooks (useState) for local component state

### API Integration
- Backend connectivity with Axios HTTP client
- Request/response interceptors for logging and error handling
- Environment-based API configuration
- Comprehensive error handling with user-friendly messages

### Todo Management
- Create new todo items
- Mark todos as complete/incomplete (automatically moves between sections)
- Inline editing (double-click to edit todo names)
- Delete todo items
- Active and Completed sections with automatic sorting
- Real-time updates with TanStack Query cache invalidation
- Loading states during API operations
- Error states with retry functionality

### UI Features
- Modern, responsive design with Tailwind CSS v4
- Light blue theme (bg-blue-50) with gradient header
- Material Icons (Google Material Symbols Outlined)
- Smooth animations and fade-in transitions
- Active navigation link highlighting
- Responsive navbar with icon tooltips
- Custom blue checkmark favicon
- Mobile-optimized layout

## License

MIT
