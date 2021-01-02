import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {SecondComponent} from './second/second.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
