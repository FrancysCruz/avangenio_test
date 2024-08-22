import React, { useState } from 'react';

function SearchComponent({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for games..."
      />
      <button type="submit" className="search_btn">Search</button>
    </form>
  );
}

export default SearchComponent;