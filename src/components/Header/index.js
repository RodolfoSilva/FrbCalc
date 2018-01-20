import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Header = ({ title = 'Calculadora DeVry' }) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
)

export default Header;
