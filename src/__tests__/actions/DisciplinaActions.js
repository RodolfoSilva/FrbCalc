import * as actions from '../../actions/DisciplinaActions'
import * as types from '../../constants/ActionTypes'

describe('DisciplinaActions', () => {
  it('deve criar uma action para adicionar uma nova disciplina', () => {
    const disciplina = { titulo: 'Disciplina', notas: { ap1: 2, ap2: 10, ap3: 5 } }
    const expectedAction = {
      type: types.ADD_DISCIPLINA,
      disciplina
    }

    expect(actions.addDisciplina(disciplina)).toEqual(expectedAction)
  })

  it('deve criar uma action para salvar uma disciplina', () => {
    const disciplina = { id: Math.floor(Math.random() * 100), titulo: 'Disciplina', notas: { ap1: 2, ap2: 10, ap3: 5 } }
    const expectedAction = {
      type: types.SAVE_DISCIPLINA,
      disciplina
    }

    expect(actions.saveDisciplina(disciplina)).toEqual(expectedAction)
  })

  it('deve criar uma action para remover uma disciplina', () => {
    const disciplina = { id: Math.floor(Math.random() * 100), titulo: 'Disciplina', notas: { ap1: 2, ap2: 10, ap3: 5 } }
    const expectedAction = {
      type: types.REMOVE_DISCIPLINA,
      disciplina
    }

    expect(actions.removeDisciplina(disciplina)).toEqual(expectedAction)
  })
})
