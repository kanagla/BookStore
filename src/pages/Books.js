import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
const Books = () => {
    console.log('📘 Books.tsx loaded'); // ✅ This will confirm the file is loaded during test
    const books = [
        { id: 1, title: 'Javascript' },
        { id: 2, title: 'Atomic Habits' },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs("main", { style: { padding: '1rem' }, children: [_jsx("h2", { children: "Available Books" }), _jsx("ul", { children: books.map((book) => (_jsx("li", { children: _jsx(Link, { to: `/books/${book.id}`, children: book.title }) }, book.id))) })] })] }));
};
export default Books;
