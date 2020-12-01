import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoremIpsum } from '../lorem-ipsum';

Enzyme.configure({ adapter: new Adapter() });

describe('Lorem Ipsum', () => {
  test('exists without data', () => {
    const wrapper = shallow(<LoremIpsum />);

    expect(wrapper.exists()).toBe(true);
  });
  test('exists with data', () => {
    const wrapper = shallow(<LoremIpsum p={2} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('creates random content', () => {
    const wrapper = shallow(
      <div>
        <LoremIpsum p={7} />
      </div>
    );
    const wrapperTwo = shallow(
      <div>
        <LoremIpsum p={7} />
      </div>
    );
    expect(wrapper.html()).not.toBe(wrapperTwo.html());
  });

  test('creates reproducible content when random is disabled', () => {
    const wrapper = shallow(
      <div>
        <LoremIpsum p={7} random={false} />
      </div>
    );
    const wrapperTwo = shallow(
      <div>
        <LoremIpsum p={7} random={false} />
      </div>
    );
    expect(wrapper.html()).toBe(wrapperTwo.html());
  });
});
