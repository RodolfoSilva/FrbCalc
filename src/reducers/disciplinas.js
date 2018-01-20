import uuid from 'uuid/v4'
import { parseObjectValuesToFloat } from '../utils'
import omit from 'lodash/omit'

const initialState = {}

const sanitizeDisciplina = (id, { titulo, notas }) => {
  return {
    [id]: {
      id, titulo,
      notas: parseObjectValuesToFloat(notas)
    }
  }
}

export const disciplinas = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_DISCIPLINAS':
      return omit(state, [action.disciplina.id])
    case 'ADD_DISCIPLINAS':
      return { ...state, ...sanitizeDisciplina(uuid(), action.disciplina) }
    case 'SAVE_DISCIPLINAS':
      return { ...state, ...sanitizeDisciplina(action.disciplina.id, action.disciplina) }
    default:
      return state
  }
}
