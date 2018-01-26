import React from 'react';
import api from '../../services/api';
import Options from './Options';
import debounce from 'lodash/debounce';
import './SearchBox.css';

const hasMoreThan1Alpanum = str => str.replace(/[^\w]/gi, '').length > 1;
const extractAlpanumAndSpaces = str => str.replace(/[^\w\s]/gi, '');

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      terms: '',
      showOptions: false,
      results: [],
      isFetching: false
    };

    this.searchResults = debounce(this.searchResults, 500);
  }

  handleChange = e => {
    const { target: { value } } = e;
    const terms = extractAlpanumAndSpaces(value);

    this.setState({ terms });

    if (hasMoreThan1Alpanum(terms)) {
      this.searchResults(terms);
      this.setState({ showOptions: true });
    } else {
      this.setState({ showOptions: false });
    }
  };

  async searchResults(terms) {
    this.setState({ isFetching: true });

    try {
      const results = await api.getLocations(terms);
      this.setState({ results, isFetching: false });
    } catch (error) {
      this.setState({ error, isFetching: false });
    }
  }

  render() {
    const { terms, results, showOptions, isFetching } = this.state;

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
        {showOptions && <Options items={results} isLoading={isFetching} />}
      </div>
    );
  }
}

export default SearchBox;
