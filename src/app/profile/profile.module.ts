import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {MainProfileComponent} from "./shared/main-profile/main-profile.component";
import {SharedModule} from "../shared/shared.module";
import {ProfileChernushevichAleksandrComponent} from "./shared/profile-chernushevich-aleksandr/profile-chernushevich-aleksandr.component";
import {ProfileChernushevichOlesiaComponent} from "./shared/profile-chernushevich-olesia/profile-chernushevich-olesia.component";
import {ProfileChernushevichMarinaComponent} from "./shared/profile-chernushevich-marina/profile-chernushevich-marina.component";
import {ProfileChernushevichNikolayComponent} from "./shared/profile-chernushevich-nikolay/profile-chernushevich-nikolay.component";

const router: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "aleksandr"
  },
  {
    path: "",
    component: MainProfileComponent,
    children: [
      {
        path: "aleksandr",
        component: ProfileChernushevichAleksandrComponent
      },
      {
        path: "olesia",
        component: ProfileChernushevichOlesiaComponent
      },
      {
        path: "nikolay",
        component: ProfileChernushevichNikolayComponent
      },
      {
        path: "marina",
        component: ProfileChernushevichMarinaComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    MainProfileComponent,
    ProfileChernushevichAleksandrComponent,
    ProfileChernushevichOlesiaComponent,
    ProfileChernushevichMarinaComponent,
    ProfileChernushevichNikolayComponent
  ]
})
export class ProfileModule { }
