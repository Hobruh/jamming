import logo from './logo.svg';
import styles from './App.css';
import React from 'react';
import SearchBar from './SearchBar/SearchBar.js';
import SearchResults from './SearchResults/SearchResults.js';
import Playlist from './Playlist/Playlist.js';
import Tracklist from './Tracklist/Tracklist.js';
import Track from './Track/Track.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        <form>
          <SearchBar />
          <div id="button">
          <button type="submit" id="search-btn" onClick={SearchResults}>Search</button>
          </div>
          </form>
        <div className={styles.lists}>
          <div id="playlist">
          <Playlist />
          </div>
        </div>
       {/* // <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      </header>
    </div>
  );
}

export default App;
