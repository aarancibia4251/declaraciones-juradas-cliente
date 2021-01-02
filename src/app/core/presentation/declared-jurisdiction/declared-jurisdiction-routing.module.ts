import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaxpayerRegisterComponent} from './taxpayer-register/taxpayer-register.component';

const routes: Routes = [
  {
    path: '',
    component: TaxpayerRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclaredJurisdictionRoutingModule { }
