import { sanitizeDisciplinas } from '../'

describe('SanitizeDisciplina', () => {
  it('Deve sanitizar todas as disciplinas e retornar o novo objeto contendo o id da disciplina como chave', () => {
    const disciplinas = {
      'd001df9d': { id: 'd001df9d-7f5e-4c89-8f51-ab6c37b16362', titulo: 'Disciplina1', notas: { ap1: '2.5', ap2: '10dr', ap3: undefined } },
      '9b529a48': { id: '9b529a48-78fa-472c-9f6c-6fbb6ce350c3', titulo: 'Disciplina2', notas: { ap1: 5, ap2: 5, ap3: 5 } },
      '37e2d32f': { id: '37e2d32f-9d72-4b00-bd28-af0fe1b8f856', titulo: 'Disciplina3', notas: { ap1: '0', ap2: 0, ap3: '' } }
    }

    const expected = {
      'd001df9d-7f5e-4c89-8f51-ab6c37b16362': { id: 'd001df9d-7f5e-4c89-8f51-ab6c37b16362', titulo: 'Disciplina1', notas: { ap1: 2.5, ap2: null, ap3: null } },
      '9b529a48-78fa-472c-9f6c-6fbb6ce350c3': { id: '9b529a48-78fa-472c-9f6c-6fbb6ce350c3', titulo: 'Disciplina2', notas: { ap1: 5, ap2: 5, ap3: 5 } },
      '37e2d32f-9d72-4b00-bd28-af0fe1b8f856': { id: '37e2d32f-9d72-4b00-bd28-af0fe1b8f856', titulo: 'Disciplina3', notas: { ap1: 0, ap2: 0, ap3: null } }
    }

    const result = sanitizeDisciplinas(disciplinas)

    expect(result).toEqual(expected)
  })
})
