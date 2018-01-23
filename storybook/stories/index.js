import React from 'react'
import { Text, View } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Card from '../../src/components/Card'
import Disciplina from '../../src/components/Disciplina'
import Notas from '../../src/components/Disciplina/Notas'
import Previsoes from '../../src/components/Disciplina/Previsoes'
import Nota from '../../src/components/Disciplina/Nota'
import Previsao from '../../src/components/Disciplina/Previsao'
import CenterView from './CenterView'

storiesOf('Card', module)
  .addDecorator(getStory => <CenterView><View style={{ height: 150 }}>{getStory()}</View></CenterView>)
  .add('inicial', () => <Card />)
  .add('com um texto', () => <Card><Text>Hello World</Text></Card>)
  .add('recebendo click', () => <Card onPress={action('clicked-card')}><Text>Hello World</Text></Card>)

storiesOf('Disciplina', module)
  .add('sem nota', () => <Disciplina onPress={action('clicked-card')} id="d289b3ae-1960-4560-8c33-bee94f716917" titulo="Média final" notas={{ ap1: null, ap2: 5, ap3: 5 }} />)

storiesOf('Nota', module)
  .add('sem nota', () => <Nota title="Média final" />)
  .add('com a nota 5', () => <Nota title="Média final" value={5} />)
  .add('com o valor da nota null', () => <Nota title="Média final" value={null} />)

storiesOf('Notas', module)
  .add('sem notas', () => <Notas style={{ justifyContent: 'space-between', flexDirection: 'row' }} ap1={null} ap2={null} ap3={null} />)
  .add('com notas negativas', () => <Notas style={{ justifyContent: 'space-between', flexDirection: 'row' }} ap1={0} ap2={2.5} ap3={4.5} />)
  .add('com notas positivas', () => <Notas style={{ justifyContent: 'space-between', flexDirection: 'row' }} ap1={5.0} ap2={7.5} ap3={10} />)

storiesOf('Previsao', module)
  .add('sem nota', () => <Previsao title="Média final" />)
  .add('com a nota 5', () => <Previsao title="Média final" value={5} />)
  .add('com o valor da nota null', () => <Previsao title="Média final" value={null} />)

storiesOf('Previsoes', module)
  .add('sem previsoes', () => <Previsoes notas={{ ap1: null, ap2: null, ap3: null }} />)
  .add('previsão para ap1', () => <Previsoes notas={{ ap1: null, ap2: 5, ap3: 5 }} />)
  .add('previsão para ap2', () => <Previsoes notas={{ ap1: 5, ap2: null, ap3: 5 }} />)
  .add('previsão para ap3', () => <Previsoes notas={{ ap1: 5, ap2: 5, ap3: null }} />)
  .add('média final', () => <Previsoes notas={{ ap1: 5, ap2: 5, ap3: 5 }} />)
  .add('Reprovação final', () => <Previsoes notas={{ ap1: 1, ap2: 2, ap3: null }} />)
