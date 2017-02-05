import { DisciplinaModel } from './../../models/disciplina.model';
import { Disciplinas } from './../../providers/disciplinas';
import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-disciplina',
  templateUrl: 'disciplina.html'
})
export class DisciplinaPage {
  disciplina: DisciplinaModel;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public disciplinasService: Disciplinas
  ) {
    this.disciplina = this.navParams.get('disciplina');

    if (!this.disciplina) {
      this.disciplina = new DisciplinaModel();
    }
  }

  save() {
    this.disciplinasService.save(this.disciplina).then(() => {
      let message: string = `A disciplina "${this.disciplina.titulo}" foi atualizada!`;
      if (this.disciplina.created_at === this.disciplina.updated_at) {
        message = `A disciplina "${this.disciplina.titulo}" foi criada!`;
      }

      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });

      toast.present();
      this.navCtrl.pop();
    });
  }

  excluir() {
    let confirm = this.alertCtrl.create({
      title: 'Apagar disciplina',
      message: `Você tem certeza que deseja apagar a disciplina "${this.disciplina.titulo}"?`,
      buttons: [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          handler: () => {
            this.disciplinasService.remove(this.disciplina).then(() => {
              let toast = this.toastCtrl.create({
                message: `A disciplina "${this.disciplina.titulo}" foi excluída!`,
                duration: 3000
              });

              toast.present();

              this.navCtrl.pop();
            });
          }
        }
      ]
    });
    confirm.present();
  }
}
