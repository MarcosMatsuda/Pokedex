import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import { addTofavorites, removeFromFavorites } from '../../store/ducks/pokedex';
import { useSelector } from 'react-redux';
const ItemFlatList = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    pokemon: { name, favorite },
  } = props;

  const pokemons = useSelector((state) => state.pokedex.pokemons);

  let isFavorite =
    favorite === undefined
      ? !!pokemons.find((el) => el.name === name)
      : favorite;

  const favoriteIcon = isFavorite ? (
    <Icon size={25} name="star" />
  ) : (
    <Icon size={25} name="star-outline" />
  );

  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 20,
      }}>
      {isFavorite ? (
        <TouchableOpacity onPress={() => dispatch(removeFromFavorites(name))}>
          {favoriteIcon}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => dispatch(addTofavorites(name))}>
          {favoriteIcon}
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            name,
          })
        }>
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { ItemFlatList };
