import 'react-native';
import React from 'react';
import { ListFooter } from '~/components';
import { render } from '@testing-library/react-native';

describe('Snapshot testing', () => {
  test('should take Snapshot', () => {
    const tree = render(<ListFooter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
