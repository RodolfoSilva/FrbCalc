class Notas {
  ap1: number;
  ap2: number;
  ap3: number;
  mediaFinal: number;
  notaParaAP3: number;

  // get mediaFinal(): number {
  //   return 0;
  // }

  // set mediaFinal(number: number) {}
}

export class DisciplinaModel {
  id: number = Date.now();
  titulo: string;
  notas: Notas = new Notas();
  created_at: Date;
  updated_at: Date;
}
