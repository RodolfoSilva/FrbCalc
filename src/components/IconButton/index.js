import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity, View } from 'react-native'

let IconButton = ({ onPress, style, iconStyle, ...props }) => (
  <TouchableOpacity activeOpacity={0.7} style={style} onPress={() => onPress()}>
    <Icon size={24} color="white" style={[iconStyle]} {...props} />
  </TouchableOpacity>
)

IconButton.propTypes = {
  ...Icon.propTypes,
  style: View.propTypes.style,
  iconStyle: Icon.propTypes.style,
  onPress: PropTypes.func.isRequired
}

export default IconButton
