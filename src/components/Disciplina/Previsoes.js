import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Previsao from './Previsao'
import ReprovadoMessage from './ReprovadoMessage'
import { NotasCalculator } from '../../utils'

const Previsoes = ({ style, notas }) => {
  const mediaFinal = NotasCalculator.mediaFinal(notas)
  const notaParaAP1 = NotasCalculator.notaParaAP1(notas)
  const notaParaAP2 = NotasCalculator.notaParaAP2(notas)
  const notaParaAP3 = NotasCalculator.notaParaAP3(notas)

  return (
    <View style={style}>
      {mediaFinal !== null && <Previsao value={mediaFinal} title="Média final" />}
      {notaParaAP1 !== null && notaParaAP1 <= 10 && <Previsao value={notaParaAP1} title="Necessário tirar na AP1" />}
      {notaParaAP2 !== null && notaParaAP2 <= 10 && <Previsao value={notaParaAP2} title="Necessário tirar na AP2" />}
      {notaParaAP3 !== null && notaParaAP3 <= 10 && <Previsao value={notaParaAP3} title="Necessário tirar na AP3" />}
      {notaParaAP3 > 10 && <ReprovadoMessage />}
    </View>
  )
}

Previsoes.propTypes = {
  notas: PropTypes.object.isRequired,
  style: View.propTypes.style
}

export default Previsoes
