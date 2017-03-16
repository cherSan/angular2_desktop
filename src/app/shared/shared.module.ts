import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CovalentCoreModule} from "@covalent/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CovalentCoreModule.forRoot(),
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    CovalentCoreModule,
  ]
})
export class SharedModule { }
