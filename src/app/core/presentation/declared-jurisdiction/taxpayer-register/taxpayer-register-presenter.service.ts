import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaxpayerRegisterPresenterService {
// region form
  parentFormGroup: FormGroup;
  fiscalAddressFormGroup: FormGroup;
  taxpayerFormGroup: FormGroup;
  typePersonFormControl: FormControl;
  typeDocFormControl: FormControl;
  nroDocFormControl: FormControl;
  namesFormControl: FormControl;
  lastNameFormControl: FormControl;
  motherLastnameFormControl: FormControl;
  socialReasonFormControl: FormControl;
  ubigeeFormControl: FormControl;
  viaFormControl: FormControl;
  numberFormControl: FormControl;
  telephoneFormControl: FormControl;
  cellphoneFormControl: FormControl;
  emailFormControl: FormControl;
  // --representant
  typeDocRepresentativeFormControl: FormControl;
  nroDocRepresentativeFormControl: FormControl;
  namesRepresentativeFormControl: FormControl;
  lastNameRepresentativeFormControl: FormControl;
  motherLastnameRepresentativeFormControl: FormControl;
  // --
  // end region
  constructor(
    private fb: FormBuilder
  ) {
    this.createForms();
  }

  private createFormFiscalAddress() {
    this.ubigeeFormControl = new FormControl(null, [Validators.required]);
    this.viaFormControl = new FormControl(null);
    this.numberFormControl = new FormControl(null);
    return this.fiscalAddressFormGroup = this.fb.group({
      ubigeeFormControl: this.ubigeeFormControl,
      viaFormControl: this.viaFormControl,
      numberFormControl: this.numberFormControl,
    });
  }

  private createForms() {
    this.parentFormGroup = this.fb.group({
      taxpayerFormGroup: this.createFormTaxPayer(),
      fiscalAddressFormGroup: this.createFormFiscalAddress()
    });
  }

  private createFormTaxPayer() {
    this.typePersonFormControl = new FormControl(1);
    this.typeDocFormControl = new FormControl(null);
    // representant
    this.typeDocRepresentativeFormControl = new FormControl(null);
    this.nroDocRepresentativeFormControl = new FormControl(null);
    this.namesRepresentativeFormControl = new FormControl(null);
    this.lastNameRepresentativeFormControl = new FormControl(null);
    this.motherLastnameRepresentativeFormControl = new FormControl(null);
    // --
    this.nroDocFormControl = new FormControl(null);
    this.namesFormControl = new FormControl(null);
    this.lastNameFormControl = new FormControl(null);
    this.motherLastnameFormControl = new FormControl(null);
    this.socialReasonFormControl = new FormControl(null);
    this.telephoneFormControl = new FormControl(null);
    this.cellphoneFormControl = new FormControl(null);
    this.emailFormControl = new FormControl(null, [Validators.email]);
    return this.taxpayerFormGroup = this.fb.group({
      typePersonFormControl: this.typePersonFormControl,
      typeDocFormControl: this.typeDocFormControl,
      // representative
      typeDocRepresentativeFormControl: this.typeDocRepresentativeFormControl,
      nroDocRepresentativeFormControl: this.nroDocRepresentativeFormControl,
      namesRepresentativeFormControl: this.namesRepresentativeFormControl,
      lastNameRepresentativeFormControl: this.lastNameRepresentativeFormControl,
      motherLastnameRepresentativeFormControl: this.motherLastnameRepresentativeFormControl,
      // end representative
      nroDocFormControl: this.nroDocFormControl,
      namesFormControl: this.namesFormControl,
      lastNameFormControl: this.lastNameFormControl,
      motherLastnameFormControl: this.motherLastnameFormControl,
      socialReasonFormControl: this.socialReasonFormControl,
      telephoneFormControl: this.telephoneFormControl,
      cellphoneFormControl: this.cellphoneFormControl,
      emailFormControl: this.emailFormControl,
    });
  }
}
