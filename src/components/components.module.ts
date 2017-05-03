import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ShowControlErrors } from './show-control-errors/show-control-errors';
import { PrevisaoNota } from './previsao-nota/previsao-nota';
import { Nota } from './nota/nota';

@NgModule({
  declarations: [
    Nota,
    PrevisaoNota,
    ShowControlErrors
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Nota,
    PrevisaoNota,
    ShowControlErrors
  ]
})
export class ComponentsModule {}
