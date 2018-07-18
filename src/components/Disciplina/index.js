import React from 'react';
import { View, Text } from 'react-native';

import { Toolbar, Button, COLOR, Card } from 'react-native-material-ui';
const VerticalLine = () => (
  <View
    style={{
      width: 1,
      height: 20,
      backgroundColor: '#E4E4E5'
    }}
  />
);

const Nota = ({ title, value }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 20 }}>{value === '' ? '_._' : value}</Text>
    <Text style={{ color: '#BBB', fontSize: 12 }}>{title}</Text>
  </View>
);

const RenderResult = (nota, legend) => {
  if (nota === null || nota > 10) {
    return null;
  }

  return (
    <React.Fragment>
      <Text style={{ fontSize: 30 }}>{nota}</Text>
      <Text style={{ fontSize: 11, textAlign: 'center' }}>{legend}</Text>
    </React.Fragment>
  );
};

const Result = ({ mediaFinal, notaParaAP1, notaParaAP2, notaParaAP3 }) => {
  const message = [
    RenderResult(mediaFinal, 'Média final'),
    RenderResult(notaParaAP1, 'Necessário tirar na AP1'),
    RenderResult(notaParaAP2, 'Necessário tirar na AP2'),
    RenderResult(notaParaAP3, 'Necessário tirar na AP3')
  ].find(result => result !== null);
  if (message) return message;

  return (
      <Text style={{ fontSize: 30 }}>_._</Text>
  );
};

const Disciplina = ({
  title,
  ap1,
  ap2,
  ap3,
  mediaFinal,
  notaParaAP1,
  notaParaAP2,
  notaParaAP3
}) => (
  <View style={{ padding: 8 }}>
    <View>
      <Text style={{ textAlign: 'left', fontWeight: '500' }}>{title}</Text>
    </View>
    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          minHeight: 90
        }}
      >
        <Nota title="AP1" value={ap1} />
        <VerticalLine />
        <Nota title="AP2" value={ap2} />
        <VerticalLine />
        <Nota title="AP3" value={ap3} />
      </View>
      <View
        style={{
          flex: 0,
          justifyContent: 'center',
          alignItems: 'center',
          width: 80
        }}
      >
        <Result {...{ mediaFinal, notaParaAP1, notaParaAP2, notaParaAP3 }} />
      </View>
    </View>
  </View>
);

export default Disciplina;
