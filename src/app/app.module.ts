import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { IconDefinition } from '@ant-design/icons-angular';
import { PlusCircleOutline, UserOutline } from '@ant-design/icons-angular/icons';
import {NgZorroAntdModule, NzIconModule} from 'ng-zorro-antd';
import {SharedModule} from '../core/presentation/shared/shared.module';
import {HomeComponent} from '../core/presentation/home/home.component';
const icons: IconDefinition[] = [PlusCircleOutline, UserOutline];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule,
    SharedModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
