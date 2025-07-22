// src/pages/Books.test.tsx
import { render, screen } from '@testing-library/react';
import Books from '../pages/Books';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

// 👇 Mock react-router-dom's Link component
vi.mock('react-router-dom', () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => <a href={to}>{children}</a>,
}));

describe('Books', () => {
  it('renders header and book list', () => {
    render(<Books />);
    expect(screen.getByText('Available Books')).toBeInTheDocument();
    expect(screen.getByText('Javascript')).toBeInTheDocument();
    expect(screen.getByText('Atomic Habits')).toBeInTheDocument();
  });

  it('renders correct links', () => {
    render(<Books />);
    expect(screen.getByText('Javascript').closest('a')).toHaveAttribute('href', '/books/1');
    expect(screen.getByText('Atomic Habits').closest('a')).toHaveAttribute('href', '/books/2');
  });
});
