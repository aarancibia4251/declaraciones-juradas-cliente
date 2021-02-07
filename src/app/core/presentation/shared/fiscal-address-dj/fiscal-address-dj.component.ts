import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-fiscal-address-dj',
  templateUrl: './fiscal-address-dj.component.html',
  styleUrls: ['./fiscal-address-dj.component.scss']
})
export class FiscalAddressDjComponent implements OnInit {
  showDirection: boolean;
  numberAndLocation: boolean;
  @Input() fiscalAddressFormGroup: FormGroup;
  @Input() title: string;
  @Output() newDirection: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {}

  showNumberAndInternLocation(event) {
    if (this.fiscalAddressFormGroup.controls['viaFormControl'].value) {
      this.numberAndLocation = true;
    } else {
      this.numberAndLocation = false;
      this.showDirection = false;
    }
  }

  showNewDirection(value) {
    this.showDirection = value;
    this.newDirection.emit(value);
  }

}
