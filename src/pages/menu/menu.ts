import { Component } from '@angular/core';
import { App, ViewController, NavController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  options: Array<{ component: string, title: string }>;

  constructor(
    public app: App,
    public viewCtrl: ViewController,
    public navCtrl: NavController
  ) {
    this.options = [
      { component: 'SobrePage', title: 'Sobre o projeto' },
    ]
  }

  goToPage(page: string) {
    this.app.getRootNav().push(page);
    this.close();
  }

  close() {
    return this.viewCtrl.dismiss();
  }
}
