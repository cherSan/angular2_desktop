import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'ch-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, AfterViewInit {

  _video: SafeResourceUrl;

  @Input()
  video:any;

  constructor(
    private _sanitizer : DomSanitizer
  ) {

  }

  ngOnInit() {
    this._video = this._sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${this.video}?autoplay=true`);
  }

  ngAfterViewInit() {
    // this.cl = 350;
  }

}
