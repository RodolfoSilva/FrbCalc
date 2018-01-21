import { SAVE_DISCIPLINA, ADD_DISCIPLINA, REMOVE_DISCIPLINA } from '../constants/ActionTypes'

export const addDisciplina = (disciplina) => ({ type: ADD_DISCIPLINA, disciplina })

export const saveDisciplina = (disciplina) => ({ type: SAVE_DISCIPLINA, disciplina })

export const removeDisciplina = (disciplina) => ({ type: REMOVE_DISCIPLINA, disciplina })
