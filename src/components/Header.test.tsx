import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('renders the app title correctly', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { name: /bookstore app/i });
    expect(heading).toBeInTheDocument();
  });
});
