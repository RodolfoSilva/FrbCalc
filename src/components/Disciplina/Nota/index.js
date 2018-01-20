import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const Nota = ({ value = null, title, style, valueStyle, titleStyle }) => (
  <View style={[styles.container, style]}>
    <Text style={[styles.value, valueStyle]}>{value === null ? '_._' : value}</Text>
    <Text style={[styles.title, titleStyle]}>{title}</Text>
  </View>
)

export default Nota
