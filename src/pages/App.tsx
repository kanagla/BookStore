import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './Books';
import BookDetail from './BookDetail';

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
