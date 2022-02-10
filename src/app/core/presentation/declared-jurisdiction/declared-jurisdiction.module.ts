import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeclaredJurisdictionRoutingModule } from './declared-jurisdiction-routing.module';
import { TaxpayerRegisterComponent } from './taxpayer-register/taxpayer-register.component';
import {SharedModule} from '../shared/shared.module';
import { MotiveLocationStateComponent } from './motive-location-state/motive-location-state.component';
import { ExistingEstateComponent } from './motive-location-state/existing-estate/existing-estate.component';
import { TransferenceComponent } from './transference/transference.component';
import { TransferenceDocumentComponent } from './transference/transference-document/transference-document.component';
import { ContractorComponent } from './transference/contractor/contractor.component';

@NgModule({
  declarations: [
    TaxpayerRegisterComponent, MotiveLocationStateComponent, ExistingEstateComponent, TransferenceComponent, TransferenceDocumentComponent, ContractorComponent,
  ],
  imports: [
    CommonModule,
    DeclaredJurisdictionRoutingModule,
    SharedModule
  ]
})
export class DeclaredJurisdictionModule { }
