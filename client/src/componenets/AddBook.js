
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/queries';

function AddBook() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');
  const { loading, error, data } = useQuery(getAuthorsQuery);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, genre, authorId);
  }

  const displayAuthors = () => {
    if (loading) return <option disabled>Loading Authors...</option>;
    if (error) return <option disabled>Error :(</option>;

    return data.authors.map(author => (
      <option key={author.id} value={author.id}>{author.name}</option>
    ));
  }

  return (
    <form className="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={ (e) => setName(e.target.value) } />
      </div>

      <div className="field">
        <label>Genre</label>
        <input type="text" onChange={ (e) => setGenre(e.target.value) } />
      </div>

      <div className="field">
        <label>Author:</label>
        <select onChange={ (e) => setAuthorId(e.target.value) }>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBook;
