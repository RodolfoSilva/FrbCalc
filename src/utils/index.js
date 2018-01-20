import isString from 'lodash/isString'
import fromPairs from 'lodash/fromPairs'
import * as NotasCalc from './notas'

export const NotasCalculator = NotasCalc

export const parseObjectValuesToFloat = (object) => {
  const entries = Object.entries(object)

  const entriesToNull = entries
    .filter(([key, value]) => value === '' || value === undefined)
    .map((nota) => [nota[0], null])

  const entriesToFloat = entries
    .filter(([key, value]) => value !== '' && isString(value))
    .map((nota) => [nota[0], parseFloat(nota[1])])

  const entriesNaNToNull = entries
    .filter(([key, value]) => value !== '' && isNaN(value))
    .map((nota) => [nota[0], null])

  return {
    ...object,
    ...fromPairs(entriesToFloat),
    ...fromPairs(entriesToNull),
    ...fromPairs(entriesNaNToNull)
  }
}
