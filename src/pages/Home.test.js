import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { expect, test } from 'vitest';
test('renders welcome text', () => {
    render(_jsx(Home, {}));
    expect(screen.getByText(/Welcome to the Bookstore/i)).toBeInTheDocument();
});
