import FilesystemStorage from 'redux-persist-filesystem-storage'
import { persistCombineReducers, createTransform } from 'redux-persist'
import { sanitizeDisciplinas } from '../utils'
import disciplinas from './disciplinas'

const transform = createTransform(null, (state, key, fullState) => {
  switch (key) {
    case 'disciplinas':
      return sanitizeDisciplinas(state)
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
