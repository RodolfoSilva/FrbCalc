import React from 'react';
import { View, Linking, Text, ScrollView } from 'react-native';
import Link from '../components/Link';
import { ActionButton } from 'react-native-material-ui';

import { Toolbar, Button, COLOR, Card } from 'react-native-material-ui';

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.goBack()}
          centerElement="Sobre o projeto"
        />
        <ScrollView style={{ flex: 1, paddingVertical: 8 }}>
          <Card>
            <View style={{ padding: 8 }}>
              <Text style={{ fontSize: 20, fontWeight: '400', color: '#333' }}>
                Calculadora Wyden
              </Text>
              <Text>
                Hey! Obrigado por usar este app. Saiba que este projeto é{' '}
                <Text style={{ fontWeight: 'bold' }}>open-source</Text>! Isso
                significa que você poderá contribuir diretamente com ele e nos
                ajudar a tornar a aplicação cada vez melhor.
              </Text>
              <View style={{ paddingTop: 8, width: 150 }}>
                <Link
                  raised
                  primary
                  text="Saiba mais"
                  url={'http://github.com/RodolfoSilva/DevryCalc/'}
                />
              </View>
            </View>
          </Card>
          <Card>
            <View style={{ padding: 8 }}>
              <Text style={{ fontSize: 20, fontWeight: '400', color: '#333' }}>
                Contribuidores
              </Text>
              <View style={{ paddingVertical: 8, flexDirection: 'row' }}>
                <Link
                  raised
                  text="Rodolfo Silva"
                  icon="logo-github"
                  iconSet="Ionicons"
                  style={{ container: { marginRight: 8 }}}
                  url={'https://github.com/RodolfoSilva'}
                />
                <Link
                  raised
                  text="Luiz Nickel"
                  icon="logo-github"
                  iconSet="Ionicons"
                  url={'https://github.com/vaporwavie'}
                />
              </View>
              <Text style={{ fontSize: 20, paddingTop: 8, fontWeight: '400', color: '#333' }}>
                Quer nos dar uma força?
              </Text>
              <View style={{ paddingTop: 8, width: 200 }}>
                <Link
                  raised
                  primary
                  text="Quero contribuir"
                  url={'https://github.com/RodolfoSilva/DeVryCalc/wiki/Quero-contribuir'}
                />
              </View>
            </View>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
