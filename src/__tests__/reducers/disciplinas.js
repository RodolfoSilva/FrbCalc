import * as uuid from 'uuid/v4'
import reducer from '../../reducers/disciplinas'
import * as types from '../../constants/ActionTypes'

jest.mock('uuid/v4', () => jest.fn())

describe('Disciplinas reducer', () => {
  it('Deve retornar o estado inicial', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  describe('ADD_DISCIPLINA', () => {
    it('Deve adicionar uma nova disciplina ao receber a action ADD_DISCIPLINA', () => {
      const disciplina = { titulo: 'Disciplina', notas: { ap1: 2, ap2: 10, ap3: 5 } }
      const id = 'd289b3ae-1960-4560-8c33-bee94f716917'
      uuid.default.mockReturnValue(id)

      const newState = reducer({}, {
        type: types.ADD_DISCIPLINA,
        disciplina
      })

      expect(newState).toEqual({ [id]: { id, ...disciplina } })
    })

    it('Deve adicionar uma nova disciplina sem remover as que já existem receber a action ADD_DISCIPLINA', () => {
      const disciplina = { titulo: 'Disciplina', notas: { ap1: 2, ap2: 10, ap3: 5 } }
      const id = 'd289b3ae-1960-4560-8c33-bee94f716917'
      uuid.default.mockReturnValue(id)

      const initialState = {
        'd001df9d-7f5e-4c89-8f51-ab6c37b16362': { id: 'd001df9d-7f5e-4c89-8f51-ab6c37b16362', titulo: 'Disciplina1', notas: { ap1: 2, ap2: 10, ap3: 5 } },
        '9b529a48-78fa-472c-9f6c-6fbb6ce350c3': { id: '9b529a48-78fa-472c-9f6c-6fbb6ce350c3', titulo: 'Disciplina2', notas: { ap1: 5, ap2: 5, ap3: 5 } },
        '37e2d32f-9d72-4b00-bd28-af0fe1b8f856': { id: '37e2d32f-9d72-4b00-bd28-af0fe1b8f856', titulo: 'Disciplina3', notas: { ap1: null, ap2: 0, ap3: 3 } }
      }

      const newState = reducer(initialState, {
        type: types.ADD_DISCIPLINA,
        disciplina
      })

      expect(newState).toEqual({ ...initialState, [id]: { id, ...disciplina } })
    })
  })

  describe('SAVE_DISCIPLINA', () => {
    it('Deve atualizar uma disciplina existente receber a action SAVE_DISCIPLINA', () => {
      const initialState = {
        'd001df9d-7f5e-4c89-8f51-ab6c37b16362': { id: 'd001df9d-7f5e-4c89-8f51-ab6c37b16362', titulo: 'Disciplina1', notas: { ap1: 2, ap2: 10, ap3: 5 } },
        '9b529a48-78fa-472c-9f6c-6fbb6ce350c3': { id: '9b529a48-78fa-472c-9f6c-6fbb6ce350c3', titulo: 'Disciplina2', notas: { ap1: 5, ap2: 5, ap3: 5 } },
        '37e2d32f-9d72-4b00-bd28-af0fe1b8f856': { id: '37e2d32f-9d72-4b00-bd28-af0fe1b8f856', titulo: 'Disciplina3', notas: { ap1: null, ap2: 0, ap3: 3 } }
      }

      const disciplina = { id: '37e2d32f-9d72-4b00-bd28-af0fe1b8f856', titulo: 'Disciplina3', notas: { ap1: 4, ap2: 3, ap3: 1 } }

      const newState = reducer(initialState, {
        type: types.SAVE_DISCIPLINA,
        disciplina
      })

      expect(newState).toEqual({ ...initialState, [disciplina.id]: { ...disciplina } })
    })
  })

  describe('REMOVE_DISCIPLINA', () => {
    it('Deve remover uma disciplina existente receber a action REMOVE_DISCIPLINA', () => {
      const expectedState = {
        'd001df9d-7f5e-4c89-8f51-ab6c37b16362': { id: 'd001df9d-7f5e-4c89-8f51-ab6c37b16362', titulo: 'Disciplina1', notas: { ap1: 2, ap2: 10, ap3: 5 } },
        '9b529a48-78fa-472c-9f6c-6fbb6ce350c3': { id: '9b529a48-78fa-472c-9f6c-6fbb6ce350c3', titulo: 'Disciplina2', notas: { ap1: 5, ap2: 5, ap3: 5 } }
      }

      const disciplina = { id: '37e2d32f-9d72-4b00-bd28-af0fe1b8f856', titulo: 'Disciplina3', notas: { ap1: null, ap2: 0, ap3: 3 } }

      const initialState = { ...expectedState, [disciplina.id]: { ...disciplina } }

      const newState = reducer(initialState, {
        type: types.REMOVE_DISCIPLINA,
        disciplina
      })

      expect(newState).toEqual(expectedState)
    })
  })
})
