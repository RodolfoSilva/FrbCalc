import { sanitizeDisciplina } from './'

export default (disciplinas) => Object.values(disciplinas)
  .map((disciplina) => sanitizeDisciplina(disciplina.id, disciplina))
  .reduce((prevState, disciplina) => ({ ...prevState, ...disciplina }), {})
