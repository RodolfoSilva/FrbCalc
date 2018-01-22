import React from 'react'
import IconButton from '../IconButton'
import styles from './styles'

let FabButton = ({ name, style, ...props }) => (
  <IconButton name={name} style={[styles.container, style]} {...props} />
)

FabButton.propTypes = {
  ...IconButton.propTypes
}

export default FabButton
