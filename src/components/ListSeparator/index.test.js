import 'react-native';
import React from 'react';
import { ListSeparator } from '~/components';
import { render } from '@testing-library/react-native';

describe('Snapshot testing', () => {
  test('should take Snapshot', () => {
    const tree = render(<ListSeparator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
