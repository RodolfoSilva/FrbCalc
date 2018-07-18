import * as Calculator from './calculator';

describe('Calculator', () => {
  describe('Método modAP3', () => {
    it('Deve retornar 5 quando todas as notas forem 5', () =>
      expect(Calculator.modAP3(5, 5)).toEqual(5));
    it('Deve retornar 4.3 quando a nota da AP1 = 7, AP2 = 4', () =>
      expect(Calculator.modAP3(7, 4)).toEqual(4.3));
    it('Deve retornar 7.3 quando a nota da AP1 = 3, AP2 = 4', () =>
      expect(Calculator.modAP3(3, 3)).toEqual(8));
  });

  describe('Método mediaFinal', () => {
    it('Deve retornar 0 quando todas as notas forem 0', () =>
      expect(Calculator.mediaFinal(0, 0, 0)).toEqual(0));
    it('Deve retornar 5 quando todas as notas forem 5', () =>
      expect(Calculator.mediaFinal(5, 5, 5)).toEqual(5));
    it('Deve retornar 5 quando a nota da AP1 = 2, AP2 = 8 e AP3 = 5', () =>
      expect(Calculator.mediaFinal(2, 8, 5)).toEqual(5));
    it('Deve retornar 5 quando a nota da AP1 = 4, AP2 = 4 e AP3 = 6.4', () =>
      expect(Calculator.mediaFinal(4, 4, 6.4)).toEqual(5));
    it('Deve retornar 5 quando a nota da AP1 = 4, AP2 = 3.3 e AP3 = 7', () =>
      expect(Calculator.mediaFinal(4, 3.3, 7)).toEqual(5));
    it('Deve retornar 6.2 quando a nota da AP1 = 8, AP2 = 4 e AP3 = 6.4', () =>
      expect(Calculator.mediaFinal(8, 4, 6.4)).toEqual(6.2));
  });

  describe('Método previsao', () => {
    it('Deve retornar 0 quando todas as notas forem 0', () =>
      expect(Calculator.previsao(0, 0)).toEqual(16.7));
    it('Deve retornar 5 quando todas as notas forem 5', () =>
      expect(Calculator.previsao(5, 5)).toEqual(5));
    it('Deve retornar 4.3 quando a nota da AP3 = 7 e AP1|2 = 4', () =>
      expect(Calculator.previsao(7, 4)).toEqual(3.3));
    it('Deve retornar 4.3 quando a nota da AP3 = 2 e AP1|2 = 5', () =>
      expect(Calculator.previsao(2, 5)).toEqual(9));
  });
});
