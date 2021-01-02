import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './core/presentation/shared/not-found/not-found.component';
import {HomeComponent} from './core/presentation/home/home.component';
import {ConsultDjComponent} from './core/presentation/consult-dj/consult-dj.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'consulta',
    component: ConsultDjComponent
  },
  {
    path: 'declared-jurisdictions-client',
    // loadChildren: () => import('./core/presentation/declared-jurisdictions/declared-jurisdictions-routing.module').then(m => m.DeclaredJurisdictionsRoutingModule)
    loadChildren: () => import('./core/presentation/declared-jurisdiction/declared-jurisdiction.module').then(m => m.DeclaredJurisdictionModule)
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
