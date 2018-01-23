import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 56,
    width: 56,
    borderRadius: 56,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#000',
    shadowOpacity: 0.23,
    shadowRadius: 3,
    shadowOffset: {
      height: 6,
      width: 0
    }
  }
})
