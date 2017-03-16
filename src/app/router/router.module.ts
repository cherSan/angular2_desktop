import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

const router: Routes = [
  {
    path: "",
    loadChildren: "../core/core.module#CoreModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
