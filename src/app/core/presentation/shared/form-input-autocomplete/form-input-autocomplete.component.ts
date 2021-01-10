import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-form-input-autocomplete',
  templateUrl: './form-input-autocomplete.component.html',
  styleUrls: ['./form-input-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputAutocompleteComponent),
      multi: true
    }
  ]
})
export class FormInputAutocompleteComponent implements OnInit {
  @Input() label: string;
  @Input() name: string;
  @Input() color = 'color-juris-gris';
  @Input() list: Array<any> = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
  @Output() newItem: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onBlurEvent: EventEmitter<any> = new EventEmitter<any>();
  newItemFlag: boolean;
  counter = 0;
  value: string;
  isDisabled: boolean;
  onChange = (_:any) => { };
  onTouch = () => { };
  constructor() { }

  ngOnInit(): void {
  }

  onBlur(event) {
    this.onBlurEvent.emit(event);
  }

  onInput(value: string) {
    this.newItemFlag = this.list.find((x: string) =>  x.toLowerCase() === value.toLowerCase());
    if (this.newItemFlag) {
      this.newItem.emit(false);
    } else {
      this.newItem.emit(true);
    }
    this.counter = value.length;
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  /*
    Eventos del ControlValueAccessor
  */

  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
      this.counter = value.length;
    } else {
      this.value = '';
    }
  }

  // tslint:disable-next-line:no-any
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // tslint:disable-next-line:no-any
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  /*
    Fin de eventos del ControlValueAccessor
  */
}
