import { combineReducers } from 'redux';
import actions from './actions';
import { combineActions, handleAction, handleActions } from 'redux-actions';
/* State shape
state: {
  disciplinas: {
    allIds: [],
    byId: {}
  }
}
*/

const initialState = {
  id: undefined,
  name: null,
  ap1: null,
  ap2: null,
  ap3: null,
  createdAt: undefined,
  updatedAt: undefined
};

export const disciplina = handleAction(
  combineActions(actions.createDisciplina, actions.updateDisciplina),
  (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },
  initialState
);

export const allIds = handleActions(
  new Map([
    [actions.createDisciplina, (state, { payload: { id } }) => [...state, id]],
    [
      actions.removeDisciplina,
      (state, { payload: { id } }) => [...state].filter(_id => _id !== id)
    ]
  ]),
  []
);

export const byId = handleActions(
  new Map([
    [
      combineActions(actions.createDisciplina, actions.updateDisciplina),
      (state, action) => ({
        ...state,
        [action.payload.id]: disciplina(state[action.payload.id], action)
      })
    ],
    [
      actions.removeDisciplina,
      (state, { payload: { id } }) => ({ ...state, [id]: undefined })
    ]
  ]),
  {}
);

export default combineReducers({
  byId,
  allIds
});
