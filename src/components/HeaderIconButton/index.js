import React from 'react'
import IconButton from '../IconButton'
import styles from './styles'

let HeaderIconButton = ({ ...props }) => (
  <IconButton style={[styles.container]} {...props} />
)

HeaderIconButton.propTypes = {
  ...IconButton.propTypes
}

export default HeaderIconButton
