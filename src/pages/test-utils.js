import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
export const renderWithRouter = (ui) => {
    return render(_jsx(MemoryRouter, { children: ui }));
};
