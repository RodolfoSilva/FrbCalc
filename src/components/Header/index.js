import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const Header = ({ title = 'Calculadora DeVry' }) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
