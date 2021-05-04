import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemon } from '../../store/ducks/details';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  PokemonContainer,
  PokemonImage,
  PokemonName,
} from './styles';
const DetailScreen = () => {
  const dispatch = useDispatch();

  const route = useRoute();
  const { name } = route.params;

  const { sprite, name: pokemonName } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(loadPokemon(name));
  }, []);

  return (
    <Container>
      <PokemonContainer>
        <PokemonImage
          source={{
            uri: sprite,
          }}
        />
      </PokemonContainer>

      <PokemonName>{pokemonName}</PokemonName>
    </Container>
  );
};

export { DetailScreen };
