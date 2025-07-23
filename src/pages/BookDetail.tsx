import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const BookDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h2>Book Details</h2>
        <p>
          You are viewing details for Book ID: <strong>{id}</strong>
        </p>
      </main>
    </>
  );
};

export default BookDetail;
