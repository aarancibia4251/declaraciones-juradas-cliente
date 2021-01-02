import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeclaredJurisdictionRoutingModule } from './declared-jurisdiction-routing.module';
import { TaxpayerRegisterComponent } from './taxpayer-register/taxpayer-register.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [TaxpayerRegisterComponent],
  imports: [
    CommonModule,
    DeclaredJurisdictionRoutingModule,
    SharedModule
  ]
})
export class DeclaredJurisdictionModule { }
