import 'react-native';
import React from 'react';
import { ListSeparator } from '~/components';
import renderer from 'react-test-renderer';

describe('Snapshot testing', () => {
  test('should take Snapshot', () => {
    const tree = renderer.create(<ListSeparator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
