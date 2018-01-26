import React from 'react';
import { shallow } from 'enzyme';
import Options from './Options';
import Option from '../Option';

describe('<Options />', () => {
  test('renders one <Option /> per item', () => {
    const props = {
      items: [{ bookingId: '1' }, { bookingId: '2' }, { bookingId: '3' }]
    };
    const wrapper = shallow(<Options {...props} />);

    expect(wrapper.find(Option)).toHaveLength(3);
  });

  test('shows a message if there are no results', () => {
    const props = { items: [] };
    const wrapper = shallow(<Options {...props} />);

    expect(wrapper.find(Option)).toHaveLength(1);
    expect(wrapper.find(Option).prop('name')).toEqual('No results found');
  });

  test('shows a message if is loading', () => {
    const props = { items: [], isLoading: true };
    const wrapper = shallow(<Options {...props} />);

    expect(wrapper.find(Option)).toHaveLength(1);
    expect(wrapper.find(Option).prop('name')).toEqual('Searching...');
  });
});
