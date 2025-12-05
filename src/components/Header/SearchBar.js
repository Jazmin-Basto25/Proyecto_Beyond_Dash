import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  const handleClick = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <div className="search-bar">
      <i 
        className="fas fa-search" 
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      ></i>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;