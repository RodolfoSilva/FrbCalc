import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DisciplinaForm from '../../components/DisciplinaForm'
import HeaderButtons from '../../components/HeaderButtons'
import HeaderIconButton from '../../components/HeaderIconButton'
import { addDisciplina } from '../../actions/DisciplinaActions'
import styles from './styles'

class DisciplinaScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    const { handleSave = () => null } = params

    return {
      title: 'Disciplina',
      headerRight: (
        <HeaderButtons>
          <HeaderIconButton onPress={handleSave} name="md-checkmark" />
        </HeaderButtons>
      )
    }
  }

  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired
    }),
    addDisciplina: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleSave: this.form.doSubmit.bind(this)
    })
  }

  onSubmit(values) {
    this.props.addDisciplina({ ...values })
    this.props.navigation.goBack()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <DisciplinaForm
          ref={(ref) => (this.form = ref)}
          onSubmit={this.onSubmit}
          style={{ paddingHorizontal: 16 }}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = ({ addDisciplina })

export default connect(mapStateToProps, mapDispatchToProps)(DisciplinaScreen)
