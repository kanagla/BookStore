import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it, vi } from 'vitest';
// ✅ Corrected: Mocks should return { default: Component }
vi.mock('./Books', () => ({
    default: () => _jsx("div", { children: "Mock Books Page" }),
}));
vi.mock('./BookDetail', () => ({
    default: () => _jsx("div", { children: "Mock Book Detail Page" }),
}));
// ✅ Properly typed mock for react-router-dom components
vi.mock('react-router-dom', () => ({
    BrowserRouter: ({ children }) => _jsx("div", { children: children }),
    Routes: ({ children }) => _jsx("div", { children: children }),
    Route: ({ element }) => _jsx(_Fragment, { children: element }),
}));
describe('App component', () => {
    it('renders Books page (mocked)', () => {
        render(_jsx(App, {}));
        expect(screen.getByText('Mock Books Page')).toBeInTheDocument();
    });
});
