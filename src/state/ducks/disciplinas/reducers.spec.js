import actions from './actions';
import * as reducers from './reducers';
jest.mock('uuid/v4', () => () => '00000000-0000-0000-0000-000000000000');

describe('disciplinas::allIds reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.allIds(undefined, {})).toEqual([]);
  });

  it('should handle actions::createDisciplina', () => {
    const action = actions.createDisciplina({});
    expect(reducers.allIds([], action)).toEqual([
      '00000000-0000-0000-0000-000000000000'
    ]);
  });

  it('should append new ids when handle actions::createDisciplina', () => {
    const action = actions.createDisciplina({});
    const initialState = ['99999999-9999-9999-9999-999999999999'];
    expect(reducers.allIds(initialState, action)).toEqual([
      '99999999-9999-9999-9999-999999999999',
      '00000000-0000-0000-0000-000000000000'
    ]);
  });

  it('should append new ids when handle actions::removeDisciplina', () => {
    const action = actions.removeDisciplina({
      id: '99999999-9999-9999-9999-999999999999'
    });
    const initialState = [
      '99999999-9999-9999-9999-999999999999',
      '00000000-0000-0000-0000-000000000000'
    ];
    expect(reducers.allIds(initialState, action)).toEqual([
      '00000000-0000-0000-0000-000000000000'
    ]);
  });
});

describe('disciplinas::byId reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.byId(undefined, {})).toEqual({});
  });

  it('should handle actions::createDisciplina', () => {
    const action = actions.createDisciplina({ name: 'Teste' });
    expect(reducers.byId({}, action)).toEqual({
      '00000000-0000-0000-0000-000000000000': {
        id: '00000000-0000-0000-0000-000000000000',
        name: 'Teste',
        ap1: null,
        ap2: null,
        ap3: null,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date)
      }
    });
  });

  it('should handle actions::updateDisciplina', () => {
    const action = actions.updateDisciplina({
      id: '99999999-9999-9999-9999-999999999999',
      name: 'Next name'
    });
    expect(reducers.byId({}, action)).toEqual({
      '99999999-9999-9999-9999-999999999999': {
        id: '99999999-9999-9999-9999-999999999999',
        name: 'Next name',
        ap1: null,
        ap2: null,
        ap3: null,
        updatedAt: expect.any(Date)
      }
    });
  });

  it('should handle actions::removeDisciplina', () => {
    const action = actions.removeDisciplina({
      id: '99999999-9999-9999-9999-999999999999'
    });
    const state = {
      '00000000-0000-0000-0000-000000000000': {
        id: '00000000-0000-0000-0000-000000000000',
        name: 'Prev name',
        ap1: null,
        ap2: null,
        ap3: null,
        updatedAt: expect.any(Date)
      },
      '99999999-9999-9999-9999-999999999999': {
        id: '99999999-9999-9999-9999-999999999999',
        name: 'Next name',
        ap1: null,
        ap2: null,
        ap3: null,
        updatedAt: expect.any(Date)
      }
    };
    expect(reducers.byId(state, action)).toEqual({
      '00000000-0000-0000-0000-000000000000': {
        id: '00000000-0000-0000-0000-000000000000',
        name: 'Prev name',
        ap1: null,
        ap2: null,
        ap3: null,
        updatedAt: expect.any(Date)
      }
    });
  });
});
