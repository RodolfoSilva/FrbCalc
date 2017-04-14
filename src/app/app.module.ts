import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { ShowControlErrors } from './../components/show-control-errors/show-control-errors';
import { PrevisaoNotaComponent } from './../pages/home/previsao-nota.component';
import { NotaComponent } from './../pages/home/nota.component';
import { Notas } from '../providers/notas';
import { Disciplinas } from './../providers/disciplinas';
import { DisciplinaPage } from './../pages/disciplina/disciplina';
import { SobrePage } from './../pages/sobre/sobre';
import { MenuPage } from './../pages/menu/menu'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisciplinaPage,
    MenuPage,
    SobrePage,
    NotaComponent,
    ShowControlErrors,
    PrevisaoNotaComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisciplinaPage,
    SobrePage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Disciplinas,
    Notas
  ]
})
export class AppModule {}
