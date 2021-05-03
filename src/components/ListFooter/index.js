import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const ListFooter = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <View
      style={{
        paddingVertical: 50,
        borderTopWidth: 1,
        borderColor: '#CED0CE',
      }}>
      <ActivityIndicator animating size="large" />
    </View>
  );
};

export { ListFooter };
