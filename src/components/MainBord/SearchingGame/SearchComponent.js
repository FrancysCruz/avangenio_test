import React, { useState } from 'react';
import searchicon from "../../../images/icons8-search-24.png"

function SearchComponent({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div>
      <form onSubmit={handleSearch}  class="search-component">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for games..."
        />
        <button type="submit">
          <img src={searchicon}/>
        </button>
      </form>
    </div>
  );
}

export default SearchComponent;