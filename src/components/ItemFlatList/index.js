import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { addTofavorites, removeFromFavorites } from '../../store/ducks/pokedex';

import {
  Container,
  Title,
  ButtonContainer,
  Star,
  DetailContainer,
} from './styles';

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

  return (
    <Container>
      {isFavorite ? (
        <ButtonContainer onPress={() => dispatch(removeFromFavorites(name))}>
          <Star name="star" />
        </ButtonContainer>
      ) : (
        <ButtonContainer onPress={() => dispatch(addTofavorites(name))}>
          <Star name="star-outline" />
        </ButtonContainer>
      )}
      <DetailContainer
        onPress={() =>
          navigation.navigate('Details', {
            name,
          })
        }>
        <Title>{name}</Title>
      </DetailContainer>
    </Container>
  );
};

export { ItemFlatList };
