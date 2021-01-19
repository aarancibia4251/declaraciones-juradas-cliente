import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Constants} from '../../../../common/utils/Constants';
import {FormBuilder} from '@angular/forms';
import {TaxpayerRegisterPresenterService} from './taxpayer-register-presenter.service';
import {Router} from '@angular/router';
import {DeclaredJurisdictionController} from '../../../domain/controller/declared-jurisdiction.controller';

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

  constructor(
    private fb: FormBuilder,
    public taxPayerPresenterSrv: TaxpayerRegisterPresenterService,
    private router: Router,
    private declaredJurisdictionCtrl: DeclaredJurisdictionController
  ) {
  }

  ngOnInit(): void {
    this.cleanNewDirection();
  }

  cleanNewDirection() {
    this.taxPayerPresenterSrv.viaFormControl.valueChanges.subscribe(() => {
      if (!this.taxPayerPresenterSrv.viaFormControl.value) {
        this.showDirection = false;
        this.numberAndLocation = false;
      }
    });
  }

  cancelRegister() {
    this.router.navigateByUrl('consulta');
  }

  saveTaxPayer() {
    console.log(this.taxPayerPresenterSrv.parentFormGroup);
    console.log(this.taxPayerPresenterSrv.fiscalAddressFormGroup);
    console.log(this.taxPayerPresenterSrv.taxpayerFormGroup);
    this.declaredJurisdictionCtrl.nextStep();
    this.router.navigateByUrl('declaraciones-juradas/motive-location');
  }

}
