import { sanitizeDisciplina } from '../'

describe('SanitizeDisciplina', () => {
  it('Deve adicionar o campo ID na disciplina e retornar um objeto', () => {
    const id = 'd289b3ae-1960-4560-8c33-bee94f716917'
    const disciplina = { titulo: 'Disciplina', notas: { ap1: 2, ap2: 10, ap3: 5 } }
    const expected = { [id]: { ...disciplina, id } }

    const result = sanitizeDisciplina(id, disciplina)

    expect(result).toEqual(expected)
  })

  it('Deve retornar todas as notas sanitizadas', () => {
    const id = '9b529a48-78fa-472c-9f6c-6fbb6ce350c3'
    const disciplina = { titulo: 'Disciplina', notas: { ap1: '9.5', ap2: '3dea', ap3: undefined } }
    const expected = { [id]: { ...disciplina, id, notas: { ap1: 9.5, ap2: null, ap3: null } } }

    const result = sanitizeDisciplina(id, disciplina)

    expect(result).toEqual(expected)
  })
})
