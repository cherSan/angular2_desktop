import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class YoutubeService {
  private key: string = "AIzaSyC2O10QvX9p6rJueolcbI_0A6KcNyi6Poo";
  private chanelId: string = "UC5iPsYED_hTAGH7owFniHvw";
  private url: string = "https://www.googleapis.com/youtube/v3/search";
  private order: string = "date";
  private part: string = "snippet,id";
  private count: number = 9;
  private countPage: number = 0;
  private _videoList: Object = {};

  private currentPage: number = 0;

  private _nextPage:   Subject<number> = new Subject();
  public nextPage$:    Observable<number> = this._nextPage.asObservable();

  public getVideoList (page) {
    return this._videoList[page];
  }

  private needToLoadVideo(page) {
    return !this.getVideoList(page);
  }

  private loadVideo(isNext) {
    let pageToken,
      currentVideo = this._videoList[this.currentPage];

    if( isNext ) {
      pageToken = `&pageToken=${currentVideo.nextPageToken}`;
    } else {
      pageToken = `&pageToken=${currentVideo.prevPageToken}`
    }

    let url = `${this.url}?key=${this.key}&channelId=${this.chanelId}&part=${this.part}&maxResults=${this.count}&order=${this.order}${pageToken}`;

    return this.query(url);
  }

  public nextPage = () => {
    if( this.currentPage < this.countPage ) {
      if( !this.needToLoadVideo(this.currentPage + 1) ) {
        this._nextPage.next(this.currentPage + 1);
        this.currentPage++;
      } else {
        this.loadVideo(true).subscribe(val => {
          this.currentPage = this.currentPage + 1;
          this._videoList[this.currentPage] = val;
          this._nextPage.next(this.currentPage);
        })
      }
    }
  };
  public prevPage = () => {
    if( this.currentPage > 1 ) {
      if( !this.needToLoadVideo(this.currentPage - 1) ) {
        this.currentPage = this.currentPage - 1;
        this._nextPage.next(this.currentPage);
      } else {
        this.loadVideo(false).subscribe(val => {
          this.currentPage = this.currentPage - 1;
          this._videoList[this.currentPage] = val;
          this._nextPage.next(this.currentPage);
        })
      }
    }
  };

  public getVideoById(page, id) {
    console.log(id, this._videoList[page], page, this._videoList);
    // for ( let pageVideo in this._videoList ) {
    //   console.log(2, pageVideo);
    //   for( let video of pageVideo ) {
    //     console.log(video);
    //   }
    // }
  }


  private query(url) {
    return this._http.get(url)
      .map(val => {
        return val.json();
      })
  }

  private initVideoList() {
    let url = `${this.url}?key=${this.key}&channelId=${this.chanelId}&part=${this.part}&maxResults=${this.count}&order=${this.order}`;

    return this.query(url).subscribe(val => {
      this._videoList[1] = val;
      let info = val.pageInfo;
      this.countPage = Math.ceil(info.totalResults/info.resultsPerPage);
      this._nextPage.next(1);
      this.currentPage = 1;
    })
  }


  constructor(private _http: Http) {
    this.initVideoList();
  }



}
