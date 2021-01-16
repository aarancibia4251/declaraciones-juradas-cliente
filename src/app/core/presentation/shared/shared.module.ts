import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchDjComponent} from './search-dj/search-dj.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {RegisterDjComponent} from './register-dj/register-dj.component';
import {StepsDjComponent} from './steps-dj/steps-dj.component';
import {FormInputComponent} from './form-input/form-input.component';
import {FormSelectComponent} from './form-select/form-select.component';
import {FormInputAutocompleteComponent} from './form-input-autocomplete/form-input-autocomplete.component';
import { RegisterButtonsDjComponent } from './register-buttons-dj/register-buttons-dj.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    SearchDjComponent,
    RegisterDjComponent,
    StepsDjComponent,
    FormInputComponent,
    FormSelectComponent,
    FormInputAutocompleteComponent,
    RegisterButtonsDjComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NzSpaceModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SearchDjComponent,
    NgZorroAntdModule,
    RegisterDjComponent,
    NzSpaceModule,
    FormInputComponent,
    FormSelectComponent,
    FormInputAutocompleteComponent,
    RegisterButtonsDjComponent
  ]
})
export class SharedModule {
}
