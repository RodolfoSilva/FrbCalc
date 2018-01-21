import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const Nota = ({ value = null, title, style, valueStyle, titleStyle }) => (
  <View style={[styles.container, style]}>
    <Text style={[styles.value, valueStyle]}>{value === null ? '_._' : value}</Text>
    <Text style={[styles.title, titleStyle]}>{title}</Text>
  </View>
)

Nota.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string.isRequired,
  style: View.propTypes.style,
  valueStyle: Text.propTypes.style,
  titleStyle: Text.propTypes.style
}

export default Nota
