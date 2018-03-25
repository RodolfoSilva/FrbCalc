import React, { Component } from 'react'
import { ScrollView, Alert } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import HeaderButtons from '../../components/HeaderButtons'
import DisciplinaForm from '../../components/DisciplinaForm'
import HeaderIconButton from '../../components/HeaderIconButton'
import { saveDisciplina, removeDisciplina } from '../../actions/DisciplinaActions'
import styles from './styles'

class DisciplinaScreen extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

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
        <HeaderButtons>
          <HeaderIconButton onPress={handleRemove} name="md-trash" />
          <HeaderIconButton onPress={handleSave} name="md-checkmark" />
        </HeaderButtons>
      )
    }
  }

  componentDidMount() {
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
      <ScrollView style={styles.container}>
        <DisciplinaForm
          ref={(ref) => (this.form = ref)}
          initialState={this.props.navigation.state.params.disciplina}
          onSubmit={this.onSubmit}
          style={{ paddingHorizontal: 16 }}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = ({ saveDisciplina, removeDisciplina })

export default connect(mapStateToProps, mapDispatchToProps)(DisciplinaScreen)
