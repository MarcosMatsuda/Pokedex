import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15;
  padding-right: 15;
  padding-top: 10;
  padding-bottom: 10;
  margin-left: 20;
  margin-right: 20;
`;

export const Title = styled.Text`
  /* font-family: 'PokemonSolid'; */
  font-size: 25;
  color: #26777f;
`;

export const ButtonContainer = styled.TouchableOpacity``;

export const DetailContainer = styled.TouchableOpacity``;

export const Star = styled(Icon).attrs({
  type: (props) => props.inputType,
  size: 30,
})`
  color: #dea520;
`;
