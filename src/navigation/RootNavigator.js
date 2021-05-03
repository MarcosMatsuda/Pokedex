import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TabNavigator } from '~/navigation/TabNavigator';
import { DetailScreen } from '~/pages';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'float'}>
        <Stack.Screen
          name="Pokedex"
          component={TabNavigator}
          options={{ title: 'Pokedex Challenge' }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
