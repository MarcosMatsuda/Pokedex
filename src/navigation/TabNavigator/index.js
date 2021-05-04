import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { translate } from '~/services/i18n';
import SplashScreen from 'react-native-splash-screen';
import { PokedexScreen, FavoritesScreen } from '~/pages';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Tab.Navigator
      headerMode="none"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Pokedex') {
            return <Icon size={25} name="list-circle-outline" />;
          } else {
            return <Icon size={25} name="star" />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 15,
        },
      }}>
      <Tab.Screen name="Pokedex" component={PokedexScreen} />
      <Tab.Screen
        name={translate('tab.favorites')}
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
};
