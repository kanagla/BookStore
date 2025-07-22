import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
