import { colors } from '../../../styles'

export const styleByNota = (nota = null) => {
  if (nota === null) return {}
  if (nota >= 5) return { color: colors.secondary }
  return { color: colors.danger }
}
