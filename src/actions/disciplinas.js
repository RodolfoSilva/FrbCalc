import { AsyncStorage } from 'react-native';

export const loadNotas = () => async (dispatch) => {
  // Array(10).fill(null).forEach(() => dispatch(addDisciplina({})));
}

export const saveDisciplina = (disciplina) => async (dispatch) => dispatch({ type: 'SAVE_DISCIPLINAS', disciplina });
export const addDisciplina = (disciplina) => async (dispatch) => dispatch({ type: 'ADD_DISCIPLINAS', disciplina });
export const removeDisciplina = (disciplina) => async (dispatch) => dispatch({ type: 'REMOVE_DISCIPLINAS', disciplina });

