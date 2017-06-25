import { NgModule } from '@angular/core';
import { Notas } from './notas';
import { Disciplinas } from './disciplinas';

@NgModule({
  exports: [],
  providers: [
    Disciplinas,
    Notas
  ]
})
export class ProvidersModule {}
