import React from 'react'
import PropTypes from 'prop-types'
import Nota from '../Nota'
import styles from './styles'

const Previsao = ({ value, title }) => (
  <Nota
    value={value}
    title={title}
    style={styles.container}
    valueStyle={styles.value}
  />
)

Previsao.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string.isRequired
}
export default Previsao
