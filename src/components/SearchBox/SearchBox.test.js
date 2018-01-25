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

  it('saves on the state the searched term', () => {
    const wrapper = shallow(<SearchBox />);

    wrapper
      .find('.SearchBox-input')
      .simulate('change', { target: { value: '123' } });

    expect(wrapper.state()).toEqual({ terms: '123' });
  });

  it('only allows type alphanumeric characters and spaces', () => {
    const wrapper = shallow(<SearchBox />);

    wrapper
      .find('.SearchBox-input')
      .simulate('change', { target: { value: '!1@2# 3$4%5' } });

    expect(wrapper.state()).toEqual({ terms: '12 345' });
  });
});
