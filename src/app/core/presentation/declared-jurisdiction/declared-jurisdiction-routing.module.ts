import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaxpayerRegisterComponent} from './taxpayer-register/taxpayer-register.component';
import {MotiveLocationStateComponent} from './motive-location-state/motive-location-state.component';
import {TransferenceComponent} from './transference/transference.component';

const routes: Routes = [
  {
    path: '',
    component: TaxpayerRegisterComponent,
  },
  {
    path: 'motive-location',
    component: MotiveLocationStateComponent,
  },
  {
    path: 'transferencia',
    component: TransferenceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclaredJurisdictionRoutingModule { }
