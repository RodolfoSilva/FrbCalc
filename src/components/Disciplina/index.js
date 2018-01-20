import React from 'react'
import { Text, View } from 'react-native'
import Card from '../Card'
import Nota from './Nota'
import Previsao from './Previsao'
import styles from './styles'
import { colors } from '../../styles'

const getColorByNota = (nota = null) => {

  if (nota === null) return {}

  if (nota >= 5) return { color: colors.secondary }

  return { color: colors.danger }
}

/**
 * Calcula a nota que deve ser tirada na AP3
 *
 * @param {number} ap1 Nota da AP1
 * @param {number} ap2 Nota da AP2
 *
 * @returns {number}
 */
const modAP3 = ({ ap1 = 0, ap2 = 0 }) => Number(((50 - ((ap1 + ap2) * 3)) / 4).toFixed(1))

/**
 * Calcula a média final
 *
 * @param {number} ap1 Nota da AP1
 * @param {number} ap2 Nota da AP2
 * @param {number} ap3 Nota da AP3
 *
 * @returns {number}
 */
const mediaFinal = ({ ap1 = 0, ap2 = 0, ap3 = 0 }) => Number(Math.abs(((ap1 + ap2) * 3 + ap3 * 4) / 10).toFixed(1))

/**
 * Faz um cálculo da nota que deve ser tirada
 *
 * @param {number} ap3 Nota da AP3
 * @param {number} apx Nota da AP1/AP2
 *
 * @returns {number}
 */
const previsao = ({ ap3 = 0, apx = 0 }) => Number(((50 - (apx * 3 + ap3 * 4)) / 3).toFixed(1));

const Disciplina = ({ id, titulo, notas: { ap1, ap2, ap3 }, onClick }) => {
  let mf
  if (ap1 !== null && ap2 !== null && ap3 !== null) mf = mediaFinal({ ap1, ap2, ap3 })

  const notaParaAP1 = modAP3({ ap1, ap2 })

  let handlerClick = null

  if (onClick) handlerClick = () => onClick(id)

  return (
    <Card onClick={handlerClick}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{titulo}</Text>
      </View>
      <Previsao value={mf} title="Média final" />
      {/* <View style={{ alignItems: 'center', paddingVertical: 26 }}>
      <Text style={{ fontSize: 14, fontWeight: '500', color: '#333' }}>Não foi desssa vez, sorte na próxima....</Text>
    </View> */}

      <View style={styles.notas}>
        <Nota value={ap1} valueStyle={getColorByNota(ap1)} title="AP1" />
        <Nota value={ap2} valueStyle={getColorByNota(ap2)} title="AP2" />
        <Nota value={ap3} valueStyle={getColorByNota(ap3)} title="AP3" />
      </View>
    </Card>
  )
}

export default Disciplina
