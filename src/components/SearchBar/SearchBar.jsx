import './SearchBar.css';

function SearchBar() {
  return (
    <div className='container'>
      <input type='text' placeholder='Search for a song...' name='search' />
      <button type='submit'>Search</button>
    </div>
  );
}

export default SearchBar;
