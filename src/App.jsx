import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
// import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const [search, setSearch] = useState('');
  const [songs, setSongs] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/tracks/{id}`
      );
      setSongs(response.data.results);
    } catch (error) {
      console.error('Error searching for songs:', error);
    }
  };

  return (
    <>
      <div className='container'>
        <h1 className='heading'>PlayList</h1>
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <div className='display'>
          <SearchResults songs={songs} />
          {/* <Playlist /> */}
        </div>
      </div>
    </>
  );
}

export default App;
