import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from './ducks'; // import all reducers from ducks/index.js
import { persistStore, persistReducer } from 'redux-persist';
import FSStorage from 'redux-persist-fs-storage';
import RNFS from 'react-native-fs';
import { Platform } from 'react-native';

const persistDirectoryPath = Platform.select({
  ios: RNFS.LibraryDirectoryPath,
  android: RNFS.ExternalStorageDirectoryPath
});

const persistConfig = {
  timeout: 30000,
  key: 'store.db',
  keyPrefix: '',
  storage: FSStorage(persistDirectoryPath, 'WydenCalc')
};

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware()
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
