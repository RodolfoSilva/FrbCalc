import { NotasCalculator } from '../../utils'

describe('NotasCalculator', () => {
  describe('Método modAP3', () => {
    it('Deve retornar 5 quando todas as notas forem 5', () => {
      expect(NotasCalculator.modAP3(5, 5)).toEqual(5)
    })
    it('Deve retornar 4.3 quando a nota da AP1 = 7, AP2 = 4', () => {
      expect(NotasCalculator.modAP3(7, 4)).toEqual(4.3)
    })
    it('Deve retornar 7.3 quando a nota da AP1 = 3, AP2 = 4', () => {
      expect(NotasCalculator.modAP3(3, 3)).toEqual(8)
    })
  })

  describe('Método calcMediaFinal', () => {
    it('Deve retornar 0 quando todas as notas forem 0', () => {
      expect(NotasCalculator.calcMediaFinal(0, 0, 0)).toEqual(0)
    })
    it('Deve retornar 5 quando todas as notas forem 5', () => {
      expect(NotasCalculator.calcMediaFinal(5, 5, 5)).toEqual(5)
    })
    it('Deve retornar 5 quando a nota da AP1 = 2, AP2 = 8 e AP3 = 5', () => {
      expect(NotasCalculator.calcMediaFinal(2, 8, 5)).toEqual(5)
    })
    it('Deve retornar 5 quando a nota da AP1 = 4, AP2 = 4 e AP3 = 6.4', () => {
      expect(NotasCalculator.calcMediaFinal(4, 4, 6.4)).toEqual(5)
    })
    it('Deve retornar 5 quando a nota da AP1 = 4, AP2 = 3.3 e AP3 = 7', () => {
      expect(NotasCalculator.calcMediaFinal(4, 3.3, 7)).toEqual(5)
    })
    it('Deve retornar 6.2 quando a nota da AP1 = 8, AP2 = 4 e AP3 = 6.4', () => {
      expect(NotasCalculator.calcMediaFinal(8, 4, 6.4)).toEqual(6.2)
    })
  })

  describe('Método previsao', () => {
    it('Deve retornar 0 quando todas as notas forem 0', () => {
      expect(NotasCalculator.previsao(0, 0)).toEqual(16.7)
    })
    it('Deve retornar 5 quando todas as notas forem 5', () => {
      expect(NotasCalculator.previsao(5, 5)).toEqual(5)
    })
    it('Deve retornar 4.3 quando a nota da AP3 = 7 e AP1|2 = 4', () => {
      expect(NotasCalculator.previsao(7, 4)).toEqual(3.3)
    })
    it('Deve retornar 4.3 quando a nota da AP3 = 2 e AP1|2 = 5', () => {
      expect(NotasCalculator.previsao(2, 5)).toEqual(9)
    })
  })

  describe('Método notaParaAP1', () => {
    it('Deve retornar 5 quando quando as notas da ap2 e ap3 forem 5', () => {
      expect(NotasCalculator.notaParaAP1({ap1: null, ap2: 5, ap3: 5 })).toEqual(5)
    })
    it('Deve retornar null quando quando as todas as notas forem passadas', () => {
      expect(NotasCalculator.notaParaAP1({ap1: 4, ap2: 5, ap3: 5 })).toEqual(null)
    })
  })

  describe('Método notaParaAP2', () => {
    it('Deve retornar 5 quando quando as notas da ap1 e ap3 forem 5', () => {
      expect(NotasCalculator.notaParaAP2({ap1: 5, ap2: null, ap3: 5 })).toEqual(5)
    })
    it('Deve retornar null quando quando as todas as notas forem passadas', () => {
      expect(NotasCalculator.notaParaAP2({ap1: 4, ap2: 5, ap3: 5 })).toEqual(null)
    })
  })

  describe('Método notaParaAP3', () => {
    it('Deve retornar 5 quando quando as notas da ap1 e ap3 forem 5', () => {
      expect(NotasCalculator.notaParaAP3({ ap1: 5, ap2: 5, ap3: null })).toEqual(5)
    })
    it('Deve retornar null quando quando as todas as notas forem passadas', () => {
      expect(NotasCalculator.notaParaAP3({ ap1: 4, ap2: 5, ap3: 5 })).toEqual(null)
    })
  })

  describe('Método mediaFinal', () => {
    it('Deve retornar 5 quando quando as notas da ap1 e ap3 forem 5', () => {
      expect(NotasCalculator.mediaFinal({ ap1: 5, ap2: 5, ap3: 5 })).toEqual(5)
    })
    it('Deve retornar null quando quando as todas as notas forem passadas', () => {
      expect(NotasCalculator.mediaFinal({ ap1: null, ap2: null, ap3: null })).toEqual(null)
    })
  })
})
