import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { expect, test } from 'vitest';

test('renders welcome text', () => {
  render(<Home />);
  expect(screen.getByText(/Welcome to the Bookstore/i)).toBeInTheDocument();
});
