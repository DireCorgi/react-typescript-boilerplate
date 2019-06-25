import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing and matches snapshot', () => {
  const subject = shallow(<App />);
  expect(subject).toMatchSnapshot();
});
