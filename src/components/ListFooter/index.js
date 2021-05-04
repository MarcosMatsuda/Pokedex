import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';
const ListFooter = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <Container>
      <ActivityIndicator animating size="large" />
    </Container>
  );
};

export { ListFooter };
