import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';
const rootState = state => state.disciplinas;

const getAll = createSelector(rootState, state =>
  state.allIds.map(id => state.byId[id])
);

const getById = createSelector(rootState, state =>
  memoize(id => state.byId[id])
);

export default {
  getById,
  getAll
};
