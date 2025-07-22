import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { describe, it, expect } from 'vitest';

describe('Header component', () => {
  it('renders the app title correctly', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { name: /bookstore app/i });
    expect(heading).toBeInTheDocument();
  });
});
