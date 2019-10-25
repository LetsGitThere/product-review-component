import React from 'react';

import {shallow} from 'enzyme';
import App from './index.jsx';

test('test', () => {
    const TestApp = shallow(<App/>);
    expect(TestApp.exists()).toBe(true);
});

describe('Testing component rendering on loalhost', () => {
  describe('renders to localhost', () => {
    test ('App renders to the DOM', (done) => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBe(true);
      done();
    })
  })
})