import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Disciplina from '../components/Disciplina';
import { ActionButton } from 'react-native-material-ui';

import { Toolbar, Button, COLOR, Card } from 'react-native-material-ui';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          rightElement="all-inclusive"
          onRightElementPress={() => this.props.navigation.navigate('About')}
          centerElement="Calculadora Wyden"
        />
        <View style={{ flex: 1, paddingVertical: 8 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Form')}
            activeOpacity={0.4}
          >
            <Card>
              <Disciplina title={'Contabilidade Financeira Internacional'} />
            </Card>
          </TouchableOpacity>
          <Card>
            <Disciplina title={'Monitoria Didática II'} />
          </Card>
          <Card>
            <Disciplina title={'Métodos Quantitativos'} />
          </Card>
          <ActionButton icon="add" />
        </View>
      </View>
    );
  }
}
