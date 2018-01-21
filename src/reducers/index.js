import FilesystemStorage from 'redux-persist-filesystem-storage';
import { persistCombineReducers } from 'redux-persist';

import disciplinas from './disciplinas';

const config = { key: 'root', storage: FilesystemStorage };

const reducers = persistCombineReducers(config, {
  disciplinas
});

export default reducers;
