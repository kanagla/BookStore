// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App integration test', () => {
  it('renders the App with default route', () => {
    render(<App />);
    expect(screen.getByText(/Available Books/i)).toBeInTheDocument(); // Match real text in Books.tsx
  });
});
