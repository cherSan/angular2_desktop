import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {YoutubeService} from "../../youtube.service";

@Component({
  selector: 'ch-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss'],
})
export class YoutubeVideoComponent implements OnInit {
  private id: string;
  constructor(private _service: YoutubeService, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.id = val['id'];
    })
  }

  ngOnInit() {
  }

}
