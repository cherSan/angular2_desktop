import { Component, OnInit } from '@angular/core';
import {YoutubeService} from "../../youtube.service";

@Component({
  selector: 'ch-youtube-list',
  templateUrl: './youtube-list.component.html',
  styleUrls: ['./youtube-list.component.scss'],
  providers: [
    YoutubeService
  ]
})
export class YoutubeListComponent implements OnInit {

  private _rows: Array<any> = [];
  private videos: Array<Object> = [];
  private page: number;

  constructor(private _youtubeService: YoutubeService) {
    _youtubeService.nextPage$.subscribe(page => {
      this.page = page;
      this.videos = _youtubeService.getVideoList(page).items;
      this._rows = Array.from(Array(Math.ceil(this.videos.length / 3)).keys());
    })
  }

  private getVideo(type?) {
    if( type == 'next' ) {
      this._youtubeService.nextPage();
    } else {
      this._youtubeService.prevPage();
    }
  }

  ngOnInit() {
  }

}
