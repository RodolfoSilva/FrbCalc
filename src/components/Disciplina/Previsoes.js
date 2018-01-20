import React from 'react'
import { Text, View } from 'react-native'
import Previsao from './Previsao'
import { NotasCalculator } from '../../utils'

const Previsoes = ({ notas }) => {
  const mediaFinal = NotasCalculator.mediaFinal(notas)
  const notaParaAP1 = NotasCalculator.notaParaAP1(notas)
  const notaParaAP2 = NotasCalculator.notaParaAP2(notas)
  const notaParaAP3 = NotasCalculator.notaParaAP3(notas)

  return (
    <View>
      {mediaFinal !== null && <Previsao value={mediaFinal} title="Média final" />}
      {notaParaAP1 !== null && notaParaAP1 <= 10 && <Previsao value={notaParaAP1} title="Necessário tirar na AP1" />}
      {notaParaAP2 !== null && notaParaAP2 <= 10 && <Previsao value={notaParaAP2} title="Necessário tirar na AP2" />}
      {notaParaAP3 !== null && notaParaAP3 <= 10 && <Previsao value={notaParaAP3} title="Necessário tirar na AP3" />}
      {notaParaAP3 > 10 && <View style={{ alignItems: 'center', paddingVertical: 26 }}>
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#333' }}>Não foi desssa vez, sorte na próxima....</Text>
      </View>}
    </View>
  )
}


export default Previsoes
