import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SplashScreen from 'react-native-splash-screen'
import { FlatList, View } from 'react-native'
import Disciplina from '../../components/Disciplina'
import FabButton from '../../components/FabButton'
import styles from './styles'

class HomeScreen extends PureComponent {
  static propTypes = {
    disciplinas: PropTypes.object,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    })
  }

  componentDidMount() {
    SplashScreen.hide()
  }

  goToDisciplina(disciplina) {
    this.props.navigation.navigate('Disciplina', { disciplina })
  }

  renderItem({ item }) {
    return (
      <Disciplina onPress={(id) => this.goToDisciplina(item)} {...item} />
    )
  }

  render() {
    const { disciplinas, navigation } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(disciplinas)}
          keyExtractor={(item) => item.id}
          style={styles.list}
          renderItem={(item) => this.renderItem(item)}
        />

        <FabButton name="md-add" onPress={() => navigation.navigate('DisciplinaAdd')} />
      </View>
    )
  }
}

const mapStateToProps = ({ disciplinas }) => ({ disciplinas })

export default connect(mapStateToProps)(HomeScreen)
