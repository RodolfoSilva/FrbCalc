import React from 'react'
import { View } from 'react-native'
import Nota from './Nota'
import { colors } from '../../styles'
import { styleByNota } from './styles'

const Notas = ({ ap1, ap2, ap3, style }) => (
  <View style={style}>
    <Nota value={ap1} valueStyle={styleByNota(ap1)} title="AP1" />
    <Nota value={ap2} valueStyle={styleByNota(ap2)} title="AP2" />
    <Nota value={ap3} valueStyle={styleByNota(ap3)} title="AP3" />
  </View>
)

export default Notas
