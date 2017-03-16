import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {CoreComponent} from "./desktop/core.component";
import {SharedModule} from "../shared/shared.module";
import {WindowComponent} from "../shared/window/window.component";
import {WindowsService} from "../shared/windows.service";
import {ControlPanelComponent} from "../shared/control-panel/control-panel.component";

const router: Routes = [
  {
    path: "desktop",
    component: CoreComponent,
    children: [
      {
        path: "list",
        component: WindowComponent,
        children: [
          {
            path: "",
            loadChildren: "../youtube/youtube.module#YoutubeModule",
          }
        ],
        outlet: 'youtube'
      },
      {
        path: "main",
        component: WindowComponent,
        children: [
          {
            path: "",
            loadChildren: "../profile/profile.module#ProfileModule"
          }
        ],
        outlet: 'profile'
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
    CoreComponent,
    WindowComponent,
    ControlPanelComponent,
  ],
  providers: [
    WindowsService
  ]
})
export class CoreModule { }
