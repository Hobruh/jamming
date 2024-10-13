import React from 'react';
import ReactDOM from 'react-dom/client';


const SearchResults= () => {
    const searchResults = document.getElementById("search-results");
    return (
        <div id="search-results">
            {searchResults}
        </div>
    );
}

export default SearchResults