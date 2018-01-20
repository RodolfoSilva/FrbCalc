import React, { Component } from 'react'
import { View, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import DisciplinaForm from '../../components/DisciplinaForm'
import { addDisciplina } from '../../actions/disciplinas'
import styles from './styles'

class DisciplinaScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const { handleSave = () => null} = params

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
          onSubmit={this.onSubmit.bind(this)}
          style={{ paddingHorizontal: 16 }}
        />
      </View>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps =  ({ addDisciplina })

DisciplinaScreen = connect(mapStateToProps, mapDispatchToProps)(DisciplinaScreen)

export default DisciplinaScreen
