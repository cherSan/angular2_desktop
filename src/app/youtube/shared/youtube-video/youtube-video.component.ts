import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {YoutubeService} from "../../youtube.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'ch-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss'],
})
export class YoutubeVideoComponent implements OnInit {
  private _video: any;
  constructor(
    private route: ActivatedRoute,
    private _sanitizer : DomSanitizer
  ) {
    route.params.subscribe(val => {
      this._video = this._sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${val['videoId']}?autoplay=true`);
    })
  }

  ngOnInit() {
  }

}
