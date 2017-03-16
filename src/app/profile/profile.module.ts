import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {MainProfileComponent} from "./shared/main-profile/main-profile.component";
import {SharedModule} from "../shared/shared.module";

const router: Routes = [
  {
    path: "",
    component: MainProfileComponent,
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    MainProfileComponent,
  ]
})
export class ProfileModule { }
