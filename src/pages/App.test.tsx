// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it, vi } from 'vitest';
import type { ReactNode } from 'react';


// ✅ Corrected: Mocks should return { default: Component }
vi.mock('./Books', () => ({
  default: () => <div>Mock Books Page</div>,
}));

vi.mock('./BookDetail', () => ({
  default: () => <div>Mock Book Detail Page</div>,
}));

// ✅ Properly typed mock for react-router-dom components
vi.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Routes: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Route: ({ element }: { element: ReactNode }) => <>{element}</>,
}));

describe('App component', () => {
  it('renders Books page (mocked)', () => {
    render(<App />);
    expect(screen.getByText('Mock Books Page')).toBeInTheDocument();
  });
});
