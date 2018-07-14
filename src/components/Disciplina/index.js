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
    <Text style={{ fontSize: 20 }}>{value}</Text>
    <Text style={{ color: '#BBB', fontSize: 12 }}>{title}</Text>
  </View>
);

const Disciplina = ({ title, ap1, ap2, ap3 }) => (
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
        <Nota title="AP1" value={10} />
        <VerticalLine />
        <Nota title="AP2" value={10} />
        <VerticalLine />
        <Nota title="AP3" value={10} />
      </View>
      <View
        style={{
          flex: 0,
          justifyContent: 'center',
          alignItems: 'center',
          width: 80
        }}
      >
        <Text style={{ fontSize: 30 }}>10.0</Text>
        <Text style={{ fontSize: 11, textAlign: 'center' }}>
          Nescessário tirar na AP1
        </Text>
        {/* <Text>Média final</Text> */}
      </View>
    </View>
  </View>
);

export default Disciplina;
