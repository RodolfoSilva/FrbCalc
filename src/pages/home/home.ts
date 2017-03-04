import { DisciplinaModel } from './../../models/disciplina.model';
import { Notas } from '../../providers/notas';
import { Disciplinas } from './../../providers/disciplinas';
import { DisciplinaPage } from './../disciplina/disciplina';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  disciplinas: Array<DisciplinaModel> = [ ]

  constructor(
    public navCtrl: NavController,
    public disciplinasService: Disciplinas,
    public notas: Notas
  ) {}

  ionViewDidEnter() {
    this.load();
  }

  load(): Promise<any> {
    return this.disciplinasService.list()
      .then((disciplinas: Array<DisciplinaModel>) => this.disciplinas = disciplinas);
  }

  edit(disciplina) {
    this.navCtrl.push(DisciplinaPage, {disciplina});
  }

  create() {
    this.navCtrl.push(DisciplinaPage);
  }

}