import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
const BookDetail = () => {
    const { id } = useParams();
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs("main", { style: { padding: '1rem' }, children: [_jsx("h2", { children: "Book Details" }), _jsxs("p", { children: ["You are viewing details for Book ID: ", _jsx("strong", { children: id })] })] })] }));
};
export default BookDetail;
