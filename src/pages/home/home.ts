import { DisciplinaModel } from './../../models/disciplina.model';
import { Notas } from '../../providers/notas';
import { Disciplinas } from './../../providers/disciplinas';
import { DisciplinaPage } from './../disciplina/disciplina';
import { PagsPage } from './../pags/pags';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { PopoverController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  disciplinas: Array<DisciplinaModel> = [ ]

  constructor(
    public popoverCtrl: PopoverController,
    public navCtrl: NavController,
    public disciplinasService: Disciplinas,
    public notas: Notas
  ) {}

    presentPopover() {
    let popover = this.popoverCtrl.create(PagsPage);
    popover.present();
  }

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