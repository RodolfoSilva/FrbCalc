import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { DisciplinaPage } from './disciplina';

@NgModule({
  declarations: [
    DisciplinaPage,
  ],
  imports: [
    IonicPageModule.forChild(DisciplinaPage),
    ComponentsModule
  ],
  exports: [
    DisciplinaPage
  ]
})
export class DisciplinaPageModule {}
