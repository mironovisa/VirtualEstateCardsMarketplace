import React from 'react';
import SearchContainer from '../../Components/SearchContainer';

const SearchNavBar = ({ searchParams, setSearchParams }) => {
  return (
    <div className="search-nav-bar">
      <SearchContainer searchParams={searchParams} setSearchParams={setSearchParams} />
    </div>
  );
};

export default SearchNavBar;