import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from '../core/presentation/shared/not-found/not-found.component';
import {HomeComponent} from '../core/presentation/home/home.component';

const routes: Routes = [
  {
    path: 'declared-jurisdictions-client/first',
    loadChildren: () => import('./first-module/first-module.module').then(m => m.FirstModuleModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  /*{
    path: '',
    redirectTo: 'declared-jurisdictions-client/first',
    pathMatch: 'full'
  },*/
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
