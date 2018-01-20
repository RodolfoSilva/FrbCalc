import React from 'react'
import { Text, View } from 'react-native'
import Card from '../Card'
import Previsoes from './Previsoes'
import Notas from './Notas'
import styles from './styles'

const Disciplina = ({ id, titulo, notas, onClick }) => (
  <Card onClick={onClick ? () => onClick(id) : null}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{titulo}</Text>
    </View>
    <Previsoes notas={notas} />
    <Notas style={styles.notas} {...notas} />
  </Card>
)

export default Disciplina
