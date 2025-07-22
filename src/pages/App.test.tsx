// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from '../App';


// Mock child pages
jest.mock('./Books', () => () => <div>Mock Books Page</div>);
jest.mock('./BookDetail', () => () => <div>Mock Book Detail Page</div>);

// Mock BrowserRouter, Routes, and Route completely — no actual react-router loaded
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: any) => <div>{children}</div>,
  Routes: ({ children }: any) => <div>{children}</div>,
  Route: ({ element }: any) => <div>{element}</div>,
}));

describe('App component', () => {
  it('renders Books page (mocked)', () => {
    render(<App />);
    expect(screen.getByText('Mock Books Page')).toBeInTheDocument();
  });
});
