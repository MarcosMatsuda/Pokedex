import React from 'react';
import { useSelector } from 'react-redux';

import { Container, PokemonList } from './styles';
import { ItemFlatList, ListSeparator } from '../../components';

const FavoritesScreen = () => {
  const pokemons = useSelector((state) => state.pokedex.pokemons);

  const renderItem = ({ item }) => <ItemFlatList pokemon={item} />;

  return (
    <Container>
      <PokemonList
        data={pokemons}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <ListSeparator />}
      />
    </Container>
  );
};

export { FavoritesScreen };
