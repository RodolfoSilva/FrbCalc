import React, { Component } from 'react'
import { View, Alert, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import DisciplinaForm from '../../components/DisciplinaForm'
import { saveDisciplina, removeDisciplina } from '../../actions/DisciplinaActions'
import styles from './styles'

class DisciplinaScreen extends Component {
  static propTypes = {
    saveDisciplina: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired,
      state: PropTypes.object
    }),
    removeDisciplina: PropTypes.func.isRequired
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    const { handleSave = () => null, handleRemove = () => null } = params

    return {
      title: 'Disciplina',
      headerRight: (
        <View style={{ flex: 0, flexDirection: 'row' }}>
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

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
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
        { text: 'Sim',
          onPress: () => {
            this.props.removeDisciplina(this.props.navigation.state.params.disciplina)
            this.props.navigation.goBack()
          }}
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
          onSubmit={this.onSubmit}
          style={{ paddingHorizontal: 16 }}
        />
      </View>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = ({ saveDisciplina, removeDisciplina })

export default connect(mapStateToProps, mapDispatchToProps)(DisciplinaScreen)
