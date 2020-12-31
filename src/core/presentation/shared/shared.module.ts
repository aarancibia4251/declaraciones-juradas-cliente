import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchDjComponent } from './search-dj/search-dj.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [NotFoundComponent, SearchDjComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SearchDjComponent
  ]
})
export class SharedModule { }
