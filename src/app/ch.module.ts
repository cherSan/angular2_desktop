import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './ch.component';
import {RouteModule} from "./router/router.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
