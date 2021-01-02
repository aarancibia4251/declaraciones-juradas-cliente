import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { IconDefinition } from '@ant-design/icons-angular';
import { PlusCircleOutline, UserOutline } from '@ant-design/icons-angular/icons';
import {es_ES, NZ_I18N, NzIconModule} from 'ng-zorro-antd';
import {SharedModule} from './core/presentation/shared/shared.module';
import {HomeComponent} from './core/presentation/home/home.component';
import {registerLocaleData} from '@angular/common';
import es from '@angular/common/locales/es';
import { ConsultDjComponent } from './core/presentation/consult-dj/consult-dj.component';
const icons: IconDefinition[] = [PlusCircleOutline, UserOutline];

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultDjComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
