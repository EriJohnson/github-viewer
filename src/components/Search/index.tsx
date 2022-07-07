import './styles.css';

function Search() {
  return (
    <div className='search'>
      <h1>Github Viewer</h1>
      <input placeholder='Search for a username' className='search__input' />
      <button className='search__button'>Pesquisar</button>
    </div>
  );
}

export default Search;
