import 'react-native';
import React from 'react';
import { DetailScreen } from '~/pages';
import * as reactRedux from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
  useRoute: jest.fn(),
}));

describe('Snapshot testing', () => {
  let initialState = {};
  let component;
  const params = {};
  const mockStore = configureStore();
  let store;

  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    initialState = { details: { sprite: '', name: 'pikachu' } };
    store = mockStore(initialState);
    component = (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Details"
              component={DetailScreen}
              initialParams={params}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  });

  test('should take Snapshot', () => {
    const tree = render(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('check if pokemonImage component exists', () => {
    const { getByTestId } = render(component);
    expect(getByTestId('pokemonImageID')).toBeTruthy(); //passes
  });

  test('check if pokemonName component exists', () => {
    const { getByTestId } = render(component);
    expect(getByTestId('pokemonNameID')).toBeTruthy(); //passes
  });
});
