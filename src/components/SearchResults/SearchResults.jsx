import './SearchResults.css';

function SearchResults({ songs }) {
  return (
    <div className='container-results'>
      <h2>Results</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
