/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Sum } from '../notes';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('Test Function Sum' , () => {
  const result = Sum(5,5)
  expect(result).toBe(10)
})
