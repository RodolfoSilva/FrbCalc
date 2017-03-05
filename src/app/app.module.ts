import { PrevisaoNotaComponent } from './../pages/home/previsao-nota.component';
import { NotaComponent } from './../pages/home/nota.component';
import { Notas } from '../providers/notas';
import { Disciplinas } from './../providers/disciplinas';
import { DisciplinaPage } from './../pages/disciplina/disciplina';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisciplinaPage,
    NotaComponent,
    PrevisaoNotaComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisciplinaPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Disciplinas,
    Notas
  ]
})
export class AppModule {}
