import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Books = () => {
  const books = [
    { id: 1, title: 'Javascript' },
    { id: 2, title: 'Atomic Habits' },
  ];

  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h2>Available Books</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Books;
