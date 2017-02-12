import { Injectable } from '@angular/core';

@Injectable()
export class Notas {
  /**
   * Calcula a nota que deve ser tirada na AP3
   *
   * @param {number} ap1 Nota da AP1
   * @param {number} ap2 Nota da AP2
   *
   * @returns {number}
   */
  static modAP3(ap1: number, ap2: number): number {
    return Number(((50 - ((ap1 + ap2) * 3)) / 4).toFixed(1));
  }

  /**
   * Calcula a média final
   *
   * @param {number} ap1 Nota da AP1
   * @param {number} ap2 Nota da AP2
   * @param {number} ap3 Nota da AP3
   *
   * @returns {number}
   */
  static mediaFinal(ap1: number, ap2: number, ap3: number): number {
    return Number(Math.abs(( (ap1 + ap2) * 3 + ap3 * 4 ) / 10).toFixed(1));
  }

  /**
   * Faz um cálculo da nota que deve ser tirada
   *
   * @param {number} ap3 Nota da AP3
   * @param {number} apx Nota da AP1/AP2
   *
   * @returns {number}
   */
  static previsao(ap3: number, apx: number) {
    return Number(((50 - (apx * 3 + ap3 * 4)) / 3).toFixed(1));
  }
}
