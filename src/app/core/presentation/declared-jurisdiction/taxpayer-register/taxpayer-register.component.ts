import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Constants} from '../../../../common/utils/Constants';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {from} from 'rxjs';

@Component({
  selector: 'app-taxpayer-register',
  templateUrl: './taxpayer-register.component.html',
  styleUrls: ['./taxpayer-register.component.scss']
})
export class TaxpayerRegisterComponent implements OnInit {
  // region variables
  typePersons = Constants.TIP_PERSON;
  typeDocs = Constants.TYPES_DOCS;
  typePersonSelected = 1;
  showDirection: boolean;
  numberAndLocation: boolean;
  @ViewChild('numberForm', { static: false}) numberFormElement;
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
    this.createForm();
  }

  ngOnInit(): void {
    this.cleanNewDirection();
  }

  cleanNewDirection() {
    this.viaFormControl.valueChanges.subscribe(() => {
      if (!this.viaFormControl.value) {
        this.showDirection = false;
        this.numberAndLocation = false;
      }
    });
  }

  saveTaxPayer() {
    console.log(this.taxpayerFormGroup.getRawValue());
  }

  showNumberAndInternLocation(event) {
    if (this.viaFormControl.value) {
      this.numberAndLocation = true;
    } else {
      this.numberAndLocation = false;
    }
  }

  showNewDirection(value) {
    this.showDirection = value;
  }

  private createForm() {
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
    this.ubigeeFormControl = new FormControl(null);
    this.viaFormControl = new FormControl(null);
    this.numberFormControl = new FormControl(null);
    this.telephoneFormControl = new FormControl(null);
    this.cellphoneFormControl = new FormControl(null);
    this.emailFormControl = new FormControl(null, [Validators.email]);
    this.taxpayerFormGroup = this.fb.group({
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
      ubigeeFormControl: this.ubigeeFormControl,
      viaFormControl: this.viaFormControl,
      numberFormControl: this.numberFormControl,
      telephoneFormControl: this.telephoneFormControl,
      cellphoneFormControl: this.cellphoneFormControl,
      emailFormControl: this.emailFormControl,
    });
  }

}
