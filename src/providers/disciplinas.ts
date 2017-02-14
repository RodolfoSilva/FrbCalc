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

  list() {
    return this.storage.get('disciplinas')
      .then((disciplinas) => {
        disciplinas = disciplinas || [];

        return disciplinas.map(DisciplinaModel.fromJSON);
      });
  }

  remove(disciplina: DisciplinaModel): Promise<boolean> {
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

        disciplina.updated_at = new Date();
        disciplina.created_at = disciplina.created_at || disciplina.updated_at;

        disciplinas.push(disciplina);

        disciplinas = disciplinas.sort((a, b) => (a.titulo > b.titulo ? 1 : (b.titulo > a.titulo ? -1 : 0)));

        return this.storage.set('disciplinas', disciplinas);
      });
  }
}
