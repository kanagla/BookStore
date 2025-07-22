import { render, screen } from '@testing-library/react';
import BookDetail from './BookDetail';

// ✅ Mock useParams so we don't need MemoryRouter
jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: '5' }),
}));

// ✅ Mock Header to isolate the test
jest.mock('../components/Header', () => () => <div>Mock Header</div>);

describe('BookDetail component', () => {
  it('renders book detail with mocked route param', () => {
    render(<BookDetail />);
    expect(screen.getByText('Mock Header')).toBeInTheDocument();
    expect(screen.getByText('Book Details')).toBeInTheDocument();
    expect(screen.getByText(/Book ID:/)).toHaveTextContent('Book ID: 5');
  });
});
