import { FormControl } from '@angular/forms';

export class NotaValidator {

  static isValid(control: FormControl): any {

    if (!control.value) {
      return;
    }

    if (isNaN(control.value)) {
      return {
        "Isso não é uma nota": true
      };
    }

    if (control.value < 0) {
      return {
        "Como você conseguiu?": true
      };
    }

    if (control.value > 10) {
      return {
        "Hahahaha, a nota tá errada": true
      };
    }
  }

}
