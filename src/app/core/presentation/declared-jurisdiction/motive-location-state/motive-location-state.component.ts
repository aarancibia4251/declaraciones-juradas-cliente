import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TaxpayerRegisterPresenterService} from '../taxpayer-register/taxpayer-register-presenter.service';
import {DeclaredJurisdictionController} from '../../../domain/controller/declared-jurisdiction.controller';

@Component({
  selector: 'app-motive-location-state',
  templateUrl: './motive-location-state.component.html',
  styleUrls: ['./motive-location-state.component.scss']
})
export class MotiveLocationStateComponent implements OnInit {
  parentFormGroup: FormGroup;
  fiscalAddressFormGroup: FormGroup;
  ubigeeFormControl: FormControl;
  viaFormControl: FormControl;
  numberFormControl: FormControl;
  newDirection: boolean;
  constructor(
    private fb: FormBuilder,
    public taxPayerPresenterSrv: TaxpayerRegisterPresenterService,
    private router: Router,
    private declaredJurisdictionCtrl: DeclaredJurisdictionController
  ) { }

  ngOnInit(): void {
    this.createFormFiscalAddress();
  }

  cancelRegister() {
    this.router.navigateByUrl('consulta');
  }

  saveMotiveLocation() {
    this.declaredJurisdictionCtrl.nextStep();
    this.router.navigateByUrl('declaraciones-juradas/transferencia');
  }

  getNewDirection(value: boolean) {
    this.newDirection = value;
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
}
