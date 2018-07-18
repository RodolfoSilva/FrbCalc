import { createAction } from 'redux-actions';
import uuid from 'uuid/v4';

export const createDisciplina = createAction(
  'CREATE_DISCIPLINA',
  ({ name, ap1 = null, ap2 = null, ap3 = null }) => {
    const currentTime = new Date();
    return {
      id: uuid(),
      name,
      ap1,
      ap2,
      ap3,
      createdAt: currentTime,
      updatedAt: currentTime
    };
  }
);

export const updateDisciplina = createAction(
  'UPDATE_DISCIPLINA',
  ({ id, name, ap1 = null, ap2 = null, ap3 = null }) => ({
    id,
    name,
    ap1,
    ap2,
    ap3,
    updatedAt: new Date()
  })
);

export const removeDisciplina = createAction('REMOVE_DISCIPLINA', ({ id }) => ({
  id
}));

export default {
  createDisciplina,
  removeDisciplina,
  updateDisciplina
};
