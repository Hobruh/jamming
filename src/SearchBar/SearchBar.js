import React from 'react';
import ReactDOM from 'react-dom/client';

const SearchBar= () => {
        const searchBar = document.getElementById("search-bar");
        return (
            <div id="search-bar">
                <input type="text" placeholder="Search for a song" onChange={searchBar}/>
            </div>
        )
    };

export default SearchBar;