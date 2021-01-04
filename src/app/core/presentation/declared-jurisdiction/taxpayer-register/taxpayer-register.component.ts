import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../../utils/Constants';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-taxpayer-register',
  templateUrl: './taxpayer-register.component.html',
  styleUrls: ['./taxpayer-register.component.scss']
})
export class TaxpayerRegisterComponent implements OnInit {
  // region variables
  typePersons = Constants.TIP_PERSON;
  typePersonSelected = 1;
  // end region
  // region form
  taxpayerFormGroup: FormGroup;
  typePersonFormControl: FormControl;
  typeDocFormControl: FormControl;
  nroDocFormControl: FormControl;
  namesFormControl: FormControl;
  lastNameFormControl: FormControl;
  motherLastnameFormControl: FormControl;
  socialReasonFormControl: FormControl;
  // end region
  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {

  }

  saveTaxPayer() {
    console.log(this.taxpayerFormGroup.getRawValue());
  }

  private createForm() {
    this.typePersonFormControl = new FormControl(null);
    this.typeDocFormControl = new FormControl(null);
    this.nroDocFormControl = new FormControl(null);
    this.namesFormControl = new FormControl(null);
    this.lastNameFormControl = new FormControl(null);
    this.motherLastnameFormControl = new FormControl(null);
    this.socialReasonFormControl = new FormControl(null);
    this.taxpayerFormGroup = this.fb.group({
      typePersonFormControl: this.typePersonFormControl,
      typeDocFormControl: this.typeDocFormControl,
      nroDocFormControl: this.nroDocFormControl,
      namesFormControl: this.namesFormControl,
      lastNameFormControl: this.lastNameFormControl,
      motherLastnameFormControl: this.motherLastnameFormControl,
      socialReasonFormControl: this.socialReasonFormControl,
    });
  }

}
