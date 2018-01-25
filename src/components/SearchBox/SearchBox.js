import React from 'react';
import api from '../../services/api';
import './SearchBox.css';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      terms: ''
    };
  }

  handleChange = e => {
    const { target: { value } } = e;
    this.setState({ terms: value.replace(/[^\w\s]/gi, '') });
  };

  render() {
    const { terms } = this.state;

    return (
      <div className="SearchBox">
        <label className="SearchBox-label" htmlFor="searchbox">
          Pick-up Location
        </label>
        <input
          autoComplete="off"
          className="SearchBox-input"
          id="searchbox"
          placeholder="city, airport, station, region and district..."
          type="text"
          onChange={this.handleChange}
          value={terms}
        />
      </div>
    );
  }
}

export default SearchBox;
