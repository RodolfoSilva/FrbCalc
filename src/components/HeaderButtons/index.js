import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import styles from './styles'

let HeaderButtons = ({ children, style }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
)

HeaderButtons.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style
}

export default HeaderButtons
