import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #9e87b3;
  flex: 1;
  align-items: center;
`;

export const PokemonName = styled.Text`
  font-family: 'Pokemon Solid';
  font-size: 60;
  color: #26777f;
`;

export const PokemonNumber = styled.Text``;

export const PokemonContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.3,
}))`
  align-items: center;
  width: 80%;
  height: auto;
  padding-top: 30;
  padding-bottom: 30;
  margin-bottom: 30;
  margin-top: 30;
  border-radius: 15;
  background-color: #eee8aa;
`;

export const PokemonImage = styled.Image.attrs(() => ({
  aspectRatio: 1 / 1,
}))`
  width: 200;
`;
