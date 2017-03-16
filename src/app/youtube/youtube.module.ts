import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {YoutubeListComponent} from "./shared/youtube-list/youtube-list.component";
import {PlayerComponent} from "./player/player.component";
import {YoutubeService} from "./youtube.service";
import {SharedModule} from "../shared/shared.module";
import {ListItemComponent} from "./list-item/list-item.component";
import {YoutubeVideoComponent} from "./shared/youtube-video/youtube-video.component";

const router: Routes = [
  {
    path: "",
    component: YoutubeListComponent,
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    PlayerComponent,
    YoutubeListComponent,
    ListItemComponent,
    YoutubeVideoComponent
  ],
  providers: [
    YoutubeService
  ]
})
export class YoutubeModule { }
