import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './Books';
import BookDetail from './BookDetail';
function App() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Books, {}) }), _jsx(Route, { path: "/books/:id", element: _jsx(BookDetail, {}) })] }) }));
}
export default App;
