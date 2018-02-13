import FilesystemStorage from 'redux-persist-filesystem-storage'
import { persistCombineReducers, createTransform } from 'redux-persist'

import disciplinas, { sanitizeDisciplina } from './disciplinas'

const transform = createTransform(null, (state, key, fullState) => {
  switch (key) {
    case 'disciplinas':
      const nextState = Object.values(state)
        .map((disciplina) => sanitizeDisciplina(disciplina.id, disciplina))
        .reduce((prevState, disciplina) => ({ ...prevState, ...disciplina }), {})
      return nextState
    default:
      return state
  }
})

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  transforms: [transform]
}

const reducers = persistCombineReducers(persistConfig, {
  disciplinas
})

export default reducers
