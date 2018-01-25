import React from 'react';
import SearchBox from '../SearchBox';
import './SearchWidget.css';

const SearchWidget = () => (
  <form className="SearchWidget">
    <h1 className="SearchWidget-title">Where are you going?</h1>
    <SearchBox />
  </form>
);

export default SearchWidget;
