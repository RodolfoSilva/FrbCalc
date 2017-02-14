import { Notas } from '../providers/notas';
export function isNumber(value: any) {
  return value != null ? !isNaN(Number(value)) : false;
}

export class NotasModel {
  ap1: number = null;
  ap2: number = null;
  ap3: number = null;


  set mediaFinal(number: number) { }
  set notaParaAP1(number: number) { }
  set notaParaAP2(number: number) { }
  set notaParaAP3(number: number) { }


  get mediaFinal(): number {
    if (isNumber(this.ap1) && isNumber(this.ap2) && isNumber(this.ap3)) {
      return Notas.mediaFinal(this.ap1, this.ap2, this.ap3);
    }

    return null;
  }

  get notaParaAP1(): number {
    if (!isNumber(this.ap1) && isNumber(this.ap2) && isNumber(this.ap3)) {
      return Notas.previsao(this.ap3, this.ap2);
    }

    return null;
  }

  get notaParaAP2(): number {
    if (isNumber(this.ap1) && !isNumber(this.ap2) && isNumber(this.ap3)) {
      return Notas.previsao(this.ap3, this.ap1);
    }

    return null;
  }

  get notaParaAP3(): number {
    if (isNumber(this.ap1) && isNumber(this.ap2) && !isNumber(this.ap3)) {
      return Notas.modAP3(this.ap1, this.ap2);
    }

    return null;
  }

  // toJSON is automatically used by JSON.stringify
  toJSON(): any {
    return Object.assign({}, this);
  }

  /**
   * Deserializa um objeto de notas
   *
   * @param {Object} json Objeto NotasModel serializado
   *
   * @returns {NotasModel}
   */
  static fromJSON(json: Object): NotasModel {
    if (typeof json === 'string') {
      return NotasModel.fromJSON(JSON.parse(json));
    }

    let user = Object.create(NotasModel.prototype);
    return Object.assign(user, json);
  }

  static reviver(key: string, value: any): any {
    return key === "" ? NotasModel.fromJSON(value) : value;
  }
}

export class DisciplinaModel {
  id: number = Date.now();
  titulo: string = null;
  notas: NotasModel = new NotasModel();
  created_at: Date;
  updated_at: Date;

  static fromJSON(json: Object): DisciplinaModel {
    if (typeof json === 'string') {
      return DisciplinaModel.fromJSON(JSON.parse(json));
    }

    let user = Object.create(DisciplinaModel.prototype);

    Object.assign(user, json);

    user.notas = NotasModel.fromJSON(user.notas);

    return user;
  }
}
