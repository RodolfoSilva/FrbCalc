import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
import { DisciplinaModel } from './../../models/disciplina.model';
import { Notas } from '../../providers/notas';
import { Disciplinas } from './../../providers/disciplinas';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  disciplinas: Array<DisciplinaModel> = [ ]

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public disciplinasService: Disciplinas,
    public notas: Notas
  ) {}

  openMenu(event: MouseEvent) {
    const popover = this.popoverCtrl.create('MenuPage');
    popover.present({
      ev: event
    });
  }

  ionViewDidEnter() {
    this.load();
  }

  load(): Promise<any> {
    return this.disciplinasService.list()
      .then((disciplinas: Array<DisciplinaModel>) => this.disciplinas = disciplinas);
  }

  edit(disciplina) {
    this.navCtrl.push('DisciplinaPage', {disciplina});
  }

  create() {
    this.navCtrl.push('DisciplinaPage');
  }

}
