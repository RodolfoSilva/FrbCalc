import { parseObjectValuesToFloat } from '../../utils'


describe('parseObjectValuesToFloat', () => {
  test('ao receber um objeto vazio deve retornar um objeto vazio', () => {
    const result = parseObjectValuesToFloat({})

    expect(result).toEqual({})
  })

  test('ao receber um objeto com string deve retornar um objeto com valores numericos', () => {
    const result = parseObjectValuesToFloat({ value: '10', value2: '3.5' })

    expect(result).toEqual({ value: 10, value2: 3.5 })
  })

  test('ao receber um objeto com string vazia deve retornar um objeto com valores preenchidos como null', () => {
    const result = parseObjectValuesToFloat({ value: '' })

    expect(result).toEqual({ value: null })
  })

  test('ao receber um objeto com valores null deve retornar um objeto com valores preenchidos como null', () => {
    const result = parseObjectValuesToFloat({ value: null })

    expect(result).toEqual({ value: null })
  })

  test('ao receber um objeto com valores undefined deve retornar um objeto com valores preenchidos como null', () => {
    const result = parseObjectValuesToFloat({ value: undefined })

    expect(result).toEqual({ value: null })
  })

  test('ao receber um objeto com valores NaN deve retornar um objeto com valores preenchidos como null', () => {
    const result = parseObjectValuesToFloat({ value: 'banBan' })

    expect(result).toEqual({ value: null })
  })

  test('ao receber um objeto com valores diversificado deve retornar um objeto com nulos e númericos', () => {
    const result = parseObjectValuesToFloat({
      a: 'banBan',
      b: 10,
      c: '14.3',
      d: undefined,
      e: null,
      f: '',
      g: 0
    })

    expect(result).toEqual({
      a: null,
      b: 10,
      c: 14.3,
      d: null,
      e: null,
      f: null,
      g: 0
    })
  })
})
