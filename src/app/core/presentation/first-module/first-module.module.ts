import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { MainComponent } from './main/main.component';
import {SharedModule} from '../shared/shared.module';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [MainComponent, SecondComponent],
  imports: [
    CommonModule,
    FirstModuleRoutingModule,
    SharedModule
  ]
})
export class FirstModuleModule { }
