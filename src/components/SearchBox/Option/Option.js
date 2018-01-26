import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ city, country, name, region }) => {
  const moreInfo = [city, region, country].filter(n => n !== undefined);

  return (
    <li className="Options-item">
      <strong>{name}</strong>
      {moreInfo.length > 0 && ', '}
      {moreInfo.length > 0 && moreInfo.join(', ')}
    </li>
  );
};

Option.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  name: PropTypes.string,
  region: PropTypes.string
};

export default Option;
