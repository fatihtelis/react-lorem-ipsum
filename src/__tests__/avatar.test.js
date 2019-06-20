import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Avatar from '../avatar';

Enzyme.configure({ adapter: new Adapter() });

describe('Avatar', () => {
  test('exists without data', () => {
    const wrapper = shallow(<Avatar />);

    expect(wrapper.exists()).toBe(true);
  });
  test('exists with data', () => {
    const wrapper = shallow(
      <Avatar avatarClassName="avatar" gender="male" width="100" height="100" />,
    );
    expect(wrapper.exists()).toBe(true);
  });
});
