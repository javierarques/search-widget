import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';
import api from '../../services/api';
import Options from './Options';

jest.mock('../../services/api');
api.getLocations = () =>
  Promise.resolve([{ bookingId: '1' }, { bookingId: '2' }]);

describe('<SearchBox />', () => {
  const initialState = {
    isFetching: false,
    results: [],
    showOptions: true,
    terms: ''
  };

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
    const expectedState = { ...initialState, terms: '123' };

    wrapper
      .find('.SearchBox-input')
      .simulate('change', { target: { value: '123' } });

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('only allows type alphanumeric characters and spaces', () => {
    const wrapper = shallow(<SearchBox />);
    const expectedState = { ...initialState, terms: '12 345' };

    wrapper
      .find('.SearchBox-input')
      .simulate('change', { target: { value: '!1@2# 3$4%5' } });

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('does not show options if there are less than 2 alphanumeric chars', () => {
    const wrapper = shallow(<SearchBox />);

    wrapper.instance().handleChange({ target: { value: '1' } });

    expect(wrapper.find(Options)).toHaveLength(0);
  });

  it('shows options if  there are more than 2 alphanumeric chars', () => {
    const wrapper = shallow(<SearchBox />);

    wrapper.instance().handleChange({ target: { value: 'more than 2 chars' } });
    wrapper.update();

    expect(wrapper.find(Options)).toHaveLength(1);
  });
});
