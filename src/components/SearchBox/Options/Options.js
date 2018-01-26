import React from 'react';
import PropTypes from 'prop-types';
import Option from '../Option';

const Options = ({ items, isLoading }) => {
  const options = items.map(item => {
    const { bookingId, city, name, region, country } = item;
    return (
      <Option
        key={bookingId}
        name={name}
        city={city}
        region={region}
        country={country}
      />
    );
  });

  return (
    <ul className="Options">
      {isLoading && <Option name="Searching..." />}
      {!isLoading && items.length === 0 && <Option name="No results found" />}
      {!isLoading && items.length > 0 && options}
    </ul>
  );
};

Options.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

Options.defaultProps = {
  items: [],
  isLoading: false
};

export default Options;
