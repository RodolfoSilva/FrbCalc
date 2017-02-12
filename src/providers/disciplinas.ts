import { DisciplinaModel } from './../models/disciplina.model';
import { Notas } from './notas';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Disciplinas {

  constructor(
    public storage: Storage,
    public notas: Notas
  ) {}

  private isNumber(value: any) {
    return value != null ? !isNaN(Number(value)) : false;
  }

  updateCalcs(disciplina: DisciplinaModel) {
    disciplina.notas.mediaFinal = null;

    disciplina.notas.notaParaAP1 = null;
    disciplina.notas.notaParaAP2 = null;
    disciplina.notas.notaParaAP3 = null;

    let ap1 = disciplina.notas.ap1;
    let ap2 = disciplina.notas.ap2;
    let ap3 = disciplina.notas.ap3;

    if (this.isNumber(ap1) && this.isNumber(ap2)) {
      if (this.isNumber(ap3)) {
        disciplina.notas.mediaFinal = this.notas.mediaFinal(ap1, ap2, ap3);
        return;
      }

      if (!this.isNumber(ap3)) {
        disciplina.notas.notaParaAP3 = this.notas.modAP3(ap1, ap2);
        return;
      }
    }

    if (this.isNumber(ap3) && (this.isNumber(ap1) || this.isNumber(ap2))) {
      if (this.isNumber(ap2)) {
        disciplina.notas.notaParaAP1 = this.notas.previsao(ap3, ap2);
        return;
      }

      if (this.isNumber(ap1)) {
        disciplina.notas.notaParaAP2 = this.notas.previsao(ap3, ap1);
        return;
      }
    }
  }

  list() {
    return this.storage.get('disciplinas')
      .then((disciplinas) => {
        disciplinas = disciplinas || [];

        return disciplinas;
      });
  }

  remove(disciplina: DisciplinaModel) {
    return this.list()
      .then((disciplinas: Array<DisciplinaModel>) => {
        let result = disciplinas.find((item) => item.id === disciplina.id);

        if (result) {
          disciplinas.splice(disciplinas.indexOf(result), 1);
        }

        return this.storage.set('disciplinas', disciplinas);
      });

  }

  save(disciplina: DisciplinaModel) {
    return this.list()
      .then((disciplinas: Array<DisciplinaModel>) => {
        let result = disciplinas.find((item) => item.id === disciplina.id);

        if (result) {
          disciplinas.splice(disciplinas.indexOf(result), 1);
        }

        if (!disciplina.id) {
          disciplina.id = Date.now();
        }

        if (disciplina.notas) {
          for (let key of ['ap1', 'ap2', 'ap3']) {
            if (disciplina.notas[key] === undefined || disciplina.notas[key] === '' || isNaN(disciplina.notas[key])) {
              disciplina.notas[key] = null;
            }

            if (disciplina.notas[key] !== null) {
              disciplina.notas[key] = Number(disciplina.notas[key]);
            }
          }
        }

        this.updateCalcs(disciplina);

        disciplina.updated_at = new Date();
        disciplina.created_at = disciplina.created_at || disciplina.updated_at;

        disciplinas.push(disciplina);

        disciplinas = disciplinas.sort((a, b) => (a.titulo > b.titulo ? 1 : (b.titulo > a.titulo ? -1 : 0)));

        return this.storage.set('disciplinas', disciplinas);
      });
  }
}
