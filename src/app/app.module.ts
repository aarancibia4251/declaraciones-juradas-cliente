import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { PlusCircleOutline, UserOutline, CloseOutline, DownloadOutline, DeleteOutline, PlusOutline, FileTwoTone, PictureTwoTone, LinkOutline } from '@ant-design/icons-angular/icons';
import {es_ES, NZ_I18N, NzIconModule} from 'ng-zorro-antd';
import {SharedModule} from './core/presentation/shared/shared.module';
import {HomeComponent} from './core/presentation/home/home.component';
import {registerLocaleData} from '@angular/common';
import es from '@angular/common/locales/es';
import { ConsultDjComponent } from './core/presentation/consult-dj/consult-dj.component';
import {HttpClientModule} from '@angular/common/http';
import {ParcelModule} from 'single-spa-angular/parcel';
import { PruebaComponent } from './core/presentation/prueba/prueba.component';
const icons: IconDefinition[] = [
  PlusCircleOutline, UserOutline, CloseOutline, DownloadOutline, DeleteOutline, PlusOutline, FileTwoTone, PictureTwoTone,
  LinkOutline
];

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultDjComponent,
    PruebaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NzIconModule.forRoot(icons),
    HttpClientModule,
    ParcelModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
