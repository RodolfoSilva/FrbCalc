import React from 'react'
import { View } from 'react-native'
import Nota from '../Nota'
import PropTypes from 'prop-types'
import { styleByNota } from './styles'

const Notas = ({ ap1 = null, ap2 = null, ap3 = null, style }) => (
  <View style={style}>
    <Nota value={ap1} valueStyle={styleByNota(ap1)} title="AP1" />
    <Nota value={ap2} valueStyle={styleByNota(ap2)} title="AP2" />
    <Nota value={ap3} valueStyle={styleByNota(ap3)} title="AP3" />
  </View>
)

Notas.propTypes = {
  ap1: PropTypes.number,
  ap2: PropTypes.number,
  ap3: PropTypes.number,
  style: View.propTypes.style
}

export default Notas
