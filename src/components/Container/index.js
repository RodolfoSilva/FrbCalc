import React from 'react';
import { View } from 'react-native';

const Container = ({ style, ...rest }) => (
  <View 
    style={[{ flex: 1 }, style]} 
    {...rest} 
  />
);

export default Container;
