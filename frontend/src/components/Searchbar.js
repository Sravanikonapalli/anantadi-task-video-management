import React from 'react';

const Searchbar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search videos"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Searchbar;
