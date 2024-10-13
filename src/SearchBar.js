import React from 'react';
import ReactDOM from 'react-dom/client';

const SearchBar= () => {
        const searchBar = document.getElementById("search-bar");
        return searchBar.value;
    };

export default SearchBar;