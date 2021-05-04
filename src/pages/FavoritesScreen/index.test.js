import 'react-native';
import React from 'react';
import { FavoritesScreen } from '~/pages';
import * as reactRedux from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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
    initialState = { pokedex: { pokemon: '' } };
    store = mockStore(initialState);
    component = (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Favorites"
              component={FavoritesScreen}
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

  test('check if PokemonList component exists', () => {
    const { getByTestId } = render(component);
    expect(getByTestId('PokemonListID')).toBeTruthy(); //passes
  });
});
