import { createSelector } from 'reselect';
import memoize from 'lodash/memoize';
const rootState = state => state.disciplinas;

import * as Calculator from '../../../service/calculator';
const isNumber = value =>
  value === null || value === '' ? false : !isNaN(Number(value));

const mediaFinal = ({ ap1, ap2, ap3 }) => {
  if (!isNumber(ap1) || !isNumber(ap2) || !isNumber(ap3)) {
    return null;
  }

  return Calculator.mediaFinal(Number(ap1), Number(ap2), Number(ap3));
};

const notaParaAP1 = ({ ap1, ap2, ap3 }) => {
  if (isNumber(ap1) || !isNumber(ap2) || !isNumber(ap3)) {
    return null;
  }
  return Calculator.previsao(Number(ap3), Number(ap2));
};

const notaParaAP2 = ({ ap1, ap2, ap3 }) => {
  if (!isNumber(ap1) || isNumber(ap2) || !isNumber(ap3)) {
    return null;
  }
  return Calculator.previsao(Number(ap3), Number(ap1));
};

const notaParaAP3 = ({ ap1, ap2, ap3 }) => {
  if (!isNumber(ap1) || !isNumber(ap2) || isNumber(ap3)) {
    return null;
  }
  return Calculator.modAP3(Number(ap1), Number(ap2));
};

const getAll = createSelector(rootState, state =>
  state.allIds.map(id => state.byId[id])
);

const getAllProcessed = createSelector([getAll], state =>
  state.map(disciplina => ({
    ...disciplina,
    mediaFinal: mediaFinal(disciplina),
    notaParaAP1: notaParaAP1(disciplina),
    notaParaAP2: notaParaAP2(disciplina),
    notaParaAP3: notaParaAP3(disciplina)
  }))
);

const getById = createSelector(rootState, state =>
  memoize(id => state.byId[id])
);

export default {
  getById,
  getAllProcessed,
  getAll
};
