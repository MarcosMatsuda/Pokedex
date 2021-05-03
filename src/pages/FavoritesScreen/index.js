import React from 'react';

import { SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ItemFlatList, ListSeparator } from '../../components';

const FavoritesScreen = () => {
  const pokemons = useSelector((state) => state.pokedex.pokemons);

  const renderItem = ({ item }) => <ItemFlatList pokemon={item} />;

  return (
    <SafeAreaView>
      <FlatList
        data={pokemons}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <ListSeparator />}
      />
    </SafeAreaView>
  );
};

export { FavoritesScreen };
