import React from 'react';
import './SearchFilter.css';

const SearchFilter = ({ value, onSearch }) => (
  <input
    className="SearchFilter"
    value={value}
    onChange={e => onSearch(e.target.value)}
    placeholder="Search..."
  />
);

export default SearchFilter;
