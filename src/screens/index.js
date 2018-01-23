import { StackNavigator } from 'react-navigation'
import { colors } from '../styles'
import HomeScreen from './HomeScreen'
import DisciplinaScreen from './DisciplinaScreen'
import DisciplinaAddScreen from './DisciplinaAddScreen'

const Router = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: `Calculadora DeVry`
      }
    },
    Disciplina: {
      screen: DisciplinaScreen
    },
    DisciplinaAdd: {
      screen: DisciplinaAddScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: '#FFF'
    }
  }
)

export default Router
