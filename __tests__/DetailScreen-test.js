import 'react-native';
import React from 'react';
import { DetailScreen } from '~/pages';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MockedRootNavigator from '../mocks/MockedRootNavigator';

const mockStore = configureStore([]);

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispath: jest.fn(),
}));

describe('Snapshot testing', () => {
  let store;

  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    store = mockStore({
      name: 'pikachu',
    });

    store.dispatch = jest.fn();
  });

  test('should take Snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MockedRootNavigator
            screen="Details"
            component={DetailScreen}
            params={{ name: 'pikachu' }}
          />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
