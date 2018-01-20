import React from 'react'
import { Text, View } from 'react-native'
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

export default Previsao
