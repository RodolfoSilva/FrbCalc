import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  options: Array<{ component: Component, title: string }>;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
    this.options = [
      { component: HomePage, title: 'Ionic 2' },
      { component: HomePage, title: 'Angular 2' },
    ]
  }

  goToPage(page: Component) {
    this.navCtrl.push(page);
    this.close();
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
