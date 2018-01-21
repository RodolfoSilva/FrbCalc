import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import DisciplinaForm from '../../components/DisciplinaForm'
import { addDisciplina } from '../../actions/DisciplinaActions'
import styles from './styles'

class DisciplinaScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    const { handleSave = () => null } = params

    return {
      title: 'Disciplina',
      headerRight: (
        <View style={{ flex: 0, flexDirection: 'row' }}>
          <TouchableOpacity style={styles.headerButton} onPress={handleSave}>
            <Icon name="md-checkmark" size={24} color="white" />
          </TouchableOpacity>
        </View>
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
    // We can only set the function after the component has been initialized
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
      <View style={styles.container}>
        <DisciplinaForm
          ref={(ref) => (this.form = ref)}
          onSubmit={this.onSubmit}
          style={{ paddingHorizontal: 16 }}
        />
      </View>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = ({ addDisciplina })

export default connect(mapStateToProps, mapDispatchToProps)(DisciplinaScreen)
