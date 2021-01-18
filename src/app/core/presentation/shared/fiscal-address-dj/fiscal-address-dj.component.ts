import {Component, Input, OnInit} from '@angular/core';
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

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {}

  showNumberAndInternLocation(event) {
    if (this.fiscalAddressFormGroup.controls['viaFormControl'].value) {
      this.numberAndLocation = true;
    } else {
      this.numberAndLocation = false;
    }
  }

  showNewDirection(value) {
    this.showDirection = value;
  }

}
