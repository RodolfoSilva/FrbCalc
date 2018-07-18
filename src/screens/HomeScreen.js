import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Disciplina from '../components/Disciplina';
import MyToolbar from '../components/MyToolbar';
import { ActionButton } from 'react-native-material-ui';
import { disciplinasSelectors } from '../state/ducks/disciplinas';
import { Toolbar, Button, COLOR, Card } from 'react-native-material-ui';
import { connect } from 'react-redux';

class HomeScreen extends React.PureComponent {
  renderItem = ({ item }) => {
    return (
      <Card
        onPress={() =>
          this.props.navigation.navigate('Form', {
            itemId: item.id
          })
        }
      >
        <Disciplina
          title={item.name}
          {...item}
          ap1={item.ap1}
          ap2={item.ap2}
          ap3={item.ap3}
        />
      </Card>
    );
  };

  actions = [
    {
      icon: 'add',
      label: 'Adicionar disciplina',
      onSelect: () => this.props.navigation.navigate('Form')
    },
    {
      icon: 'all-inclusive',
      label: 'Sobre',
      menu: true,
      onSelect: () => this.props.navigation.navigate('About')
    }
    // {
    //   label: 'Configurações',
    //   onSelect: () => this.props.navigation.navigate('Settings')
    // }
  ];

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyToolbar
          rightActions={this.actions}
          centerElement="Calculadora Wyden"
        />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.items}
            keyExtractor={({ id }) => id}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: disciplinasSelectors.getAllProcessed(state)
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
