import HttpClient from '@/services/httpClient';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Search() {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setSearch(value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!search) return;

    navigate(`/repositories/${search}`);
  }

  return (
    <div className='search'>
      <h1>Github Viewer</h1>
      <form className='search__form' onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder='Search for a username'
          className='search__input'
        />
        <button type='submit' className='search__button'>
          Pesquisar
        </button>
      </form>
    </div>
  );
}

export default Search;
