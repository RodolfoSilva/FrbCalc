import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Disciplina from '../components/Disciplina';
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
          ap1={item.ap1}
          ap2={item.ap2}
          ap3={item.ap3}
        />
      </Card>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          rightElement="all-inclusive"
          onRightElementPress={() => this.props.navigation.navigate('About')}
          centerElement="Calculadora Wyden"
        />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.props.items}
            keyExtractor={({ id }) => id}
            renderItem={this.renderItem}
          />
          <ActionButton
            icon="add"
            onPress={() => this.props.navigation.navigate('Form')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: disciplinasSelectors.getAll(state)
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
