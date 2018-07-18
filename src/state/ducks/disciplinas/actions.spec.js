import actions from './actions';

describe('Actions', () => {
  test('createDisciplina', () => {
    const action = actions.createDisciplina({
      name: 'Name',
      ap1: '10',
      ap2: '8.7',
      ap3: '5'
    });
    expect(action).toEqual({
      type: 'CREATE_DISCIPLINA',
      payload: {
        id: expect.any(String),
        name: 'Name',
        ap1: '10',
        ap2: '8.7',
        ap3: '5',
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date)
      }
    });
  });
  test('removeDisciplina', () => {
    const disciplina = {
      id: 'df0e7f35-7f58-4f7f-a2ea-e2b7ccb1c680',
      name: 'Name',
      ap1: '10',
      ap2: '8.7',
      ap3: '5',
      createdAt: new Date('1990-01-01T12:00:00.000Z'),
      updatedAt: new Date('1990-01-01T12:00:00.000Z')
    };
    const action = actions.removeDisciplina(disciplina);
    expect(action).toEqual({
      type: 'REMOVE_DISCIPLINA',
      payload: {
        id: 'df0e7f35-7f58-4f7f-a2ea-e2b7ccb1c680'
      }
    });
  });
  test('updateDisciplina', () => {
    const disciplina = {
      id: 'b1899a13-549b-4b26-bf1a-1f5b25bde6b1',
      name: 'Name',
      ap1: '10',
      ap2: '8.7',
      ap3: '5',
      createdAt: new Date('1990-01-01T12:00:00.000Z'),
      updatedAt: new Date('1990-01-01T12:00:00.000Z')
    };
    const action = actions.updateDisciplina(disciplina);
    expect(action).toEqual({
      type: 'UPDATE_DISCIPLINA',
      payload: {
        id: disciplina.id,
        name: 'Name',
        ap1: '10',
        ap2: '8.7',
        ap3: '5',
        updatedAt: expect.any(Date)
      }
    });

    expect(action.payload.updatedAt).not.toEqual(disciplina.updatedAt);
  });
});
