import { parseObjectValuesToFloat } from './'

const sanitizeDisciplina = (id, { titulo, notas }) => {
  return {
    [id]: {
      id,
      titulo,
      notas: parseObjectValuesToFloat({ ap1: null, ap2: null, ap3: null, ...notas })
    }
  }
}

export default sanitizeDisciplina
