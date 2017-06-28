import { AbstractControl } from '@angular/forms';
import { Directive, DoCheck, Input, KeyValueDiffer, KeyValueDiffers, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[show-control-errors]'
})
export class ShowControlErrors implements DoCheck {
  private _differ: KeyValueDiffer<any, any>;
  private _control: AbstractControl;

  constructor(
    private _differs: KeyValueDiffers,
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { }

  @Input('show-control-errors')
  set showControlErrors(control: AbstractControl) {
    this._control = control;

    if (!this._differ && control) {
      this._differ = this._differs.find(control).create(null);
    }

    this._renderer.setElementClass(this._elementRef.nativeElement, 'form-errors', true);
  }

  ngDoCheck() {
    if (this._differ) {
      const changes = this._differ.diff(this._control);
      if (changes) {
        this.applyChanges();
      }
    }
  }

  applyChanges() {
    let attributeValue = '';
    if (this._control.invalid && (this._control.dirty || this._control.touched)) {
      attributeValue = null;
    }
    this._renderer.setElementAttribute(this._elementRef.nativeElement, 'hidden', attributeValue);
  }

}
