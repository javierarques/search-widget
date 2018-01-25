import React from 'react';
import './SearchBox.css';

const SearchBox = () => (
  <div className="SearchBox">
    <label className="SearchBox-label" htmlFor="searchbox">
      Pick-up Location
    </label>
    <input
      autocomplete="off"
      className="SearchBox-input"
      id="searchbox"
      placeholder="city, airport, station, region and district..."
      type="text"
    />
  </div>
);

export default SearchBox;
