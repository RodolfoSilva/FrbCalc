import React, { Component, Fragment } from 'react'
import { View, Button, Alert, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import DisciplinaForm from '../../components/DisciplinaForm'
import { saveDisciplina, removeDisciplina } from '../../actions/disciplinas'
import styles from './styles'

class DisciplinaScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const { handleSave = () => null, handleRemove = () => null } = params

    return {
      title: 'Disciplina',
      headerRight: (
        <View style={{ flex: 0, flexDirection: 'row'}}>
          <TouchableOpacity style={styles.headerButton} onPress={handleRemove}>
            <Icon name="md-trash" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={handleSave}>
            <Icon name="md-checkmark" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )
    }
  }

  componentDidMount() {
    // We can only set the function after the component has been initialized
    this.props.navigation.setParams({
      handleSave: this.form.doSubmit.bind(this),
      handleRemove: this.onRemove.bind(this)
    })
  }

  onRemove() {
    Alert.alert('Atenção', 'Deseja remover essa disciplina?',
      [
        { text: 'Não', onPress: () => {}, style: 'cancel' },
        { text: 'Sim', onPress: () => {
          this.props.removeDisciplina(this.props.navigation.state.params.disciplina)
          this.props.navigation.goBack()
        }},
      ])
  }

  onSubmit(values) {
    const { id, titulo, notas } = this.props.navigation.state.params.disciplina
    this.props.saveDisciplina({ id, titulo, notas, ...values })
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <DisciplinaForm
          ref={(ref) => (this.form = ref)}
          initialState={this.props.navigation.state.params.disciplina}
          onSubmit={this.onSubmit.bind(this)}
          style={{ paddingHorizontal: 16 }}
        />
      </View>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = ({ saveDisciplina, removeDisciplina })

DisciplinaScreen = connect(mapStateToProps, mapDispatchToProps)(DisciplinaScreen)

export default DisciplinaScreen
