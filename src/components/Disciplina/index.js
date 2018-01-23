import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import Card from '../Card'
import Previsoes from './Previsoes'
import Notas from './Notas'
import styles from './styles'

const Disciplina = ({ id, titulo, notas, onPress }) => (
  <Card onPress={onPress ? () => onPress(id) : null}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{titulo}</Text>
    </View>
    <Previsoes notas={notas} />
    <Notas style={styles.notas} {...notas} />
  </Card>
)

Disciplina.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  notas: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
}

export default Disciplina
