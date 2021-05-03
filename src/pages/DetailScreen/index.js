import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemon } from '../../store/ducks/details';

import { SafeAreaView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetailScreen = () => {
  const dispatch = useDispatch();

  const route = useRoute();
  const { name: nameRoute } = route.params;

  const { sprite, name, number } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(loadPokemon(nameRoute));
  }, []);

  return (
    <SafeAreaView>
      <Text>{number}</Text>
      <Text>{name}</Text>
      <Text>{sprite}</Text>
    </SafeAreaView>
  );
};

export { DetailScreen };
