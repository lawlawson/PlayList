import React from 'react';
import './SearchBar.css';

function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <div className='container'>
      <input
        type='text'
        placeholder='Search for a song...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
