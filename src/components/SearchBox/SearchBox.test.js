import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
  it('has a label with the text "Pick-up Location"', () => {
    const wrapper = shallow(<SearchBox />);

    expect(wrapper.find('.SearchBox-label').text()).toEqual('Pick-up Location');
  });

  it('has a placeholder with the text "city, airport, station, region and district..."', () => {
    const wrapper = shallow(<SearchBox />);

    expect(wrapper.find('.SearchBox-input').prop('placeholder')).toEqual(
      'city, airport, station, region and district...'
    );
  });
});
