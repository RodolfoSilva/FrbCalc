import { StyleSheet } from 'react-native'
import { colors } from '../../styles'
export const styleByNota = (nota = null) => {
  if (nota === null) return {}
  if (nota >= 5) return { color: colors.secondary }
  return { color: colors.danger }
}

export default StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000'
  },
  titleContainer: {
    alignItems: 'center'
  },
  notas: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})
