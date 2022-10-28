import React from 'react';
import Button from './HgButton';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('it returns something on button click', () => {
  const mock = jest.fn();
  const wrapper = shallow(<Button func={mock} />);
  wrapper.find('button').at(0).simulate('click');
  expect(mock).toHaveBeenCalled();
});
