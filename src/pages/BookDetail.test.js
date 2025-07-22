"use strict";
// // src/pages/BookDetail.test.tsx
// import { render, screen } from '@testing-library/react';
// import BookDetail from './BookDetail';
// import { vi } from 'vitest';
// // ✅ Mock useParams from react-router-dom
// vi.mock('react-router-dom', () => ({
//   useParams: () => ({ id: '5' }),
// }));
// // ✅ Mock Header component
// vi.mock('../components/Header', () => ({
//   default: () => <div>Mock Header</div>,
// }));
// describe('BookDetail component', () => {
//   it('renders book detail with mocked route param', () => {
//     render(<BookDetail />);
//     expect(screen.getByText('Mock Header')).toBeInTheDocument();
//     expect(screen.getByText('Book Details')).toBeInTheDocument();
//     expect(screen.getByText(/Book ID:/)).toHaveTextContent('Book ID: 5');
//   });
// });
