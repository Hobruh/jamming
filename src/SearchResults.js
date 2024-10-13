import React from 'react';
import ReactDOM from 'react-dom/client';


const SearchResults= () => {
    const searchResults = document.getElementById("search-results");
    return searchResults.innerHTML;
}

export default SearchResults