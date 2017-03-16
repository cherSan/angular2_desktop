import {Injectable, ElementRef} from '@angular/core';
import {WindowsService} from "../windows.service";

@Injectable()
export class WindowService {

  private _fullscreen: boolean = false;

  private _windowId: string;
  private _window: ElementRef;

  private _top: number;
  private _left: number;
  private _right: number;
  private _bottom: number;

  get left(): number {
    return this._left;
  };
  get top(): number {
    return this._top;
  };
  get right(): number {
    return this._right;
  };
  get bottom(): number {
    return this._bottom;
  };

  public setPosition = (left: number, top: number, right: number, bottom: number) => {
    if( this._fullscreen ) {
      return false;
    }
    if( left <= 0 ) {
      right = right + left;
      left = 0;
    }

    if( top < 0 ) {
      bottom = top + bottom;
      top = 0;
    }

    if( bottom < 40 ) {
      top = top + bottom - 40;
      bottom = 40;
    }

    if( right <= 0 ) {
      left = left + right;
      right = 0;
    }

    if( this._window.nativeElement.offsetWidth < 400 ) {
      left = left > this._left ? this._left : left;
      right = right > this._right ? this._right : right;
    }
    if( this._window.nativeElement.offsetHeight < 200 ) {
      top = top > this._top ? this._top : top;
      bottom = bottom > this._bottom ? this._bottom :bottom;
    }

    this.initPosition(left, top, right, bottom);
  };

  private initPosition = (left: number, top: number, right: number, bottom: number) => {
    this._window.nativeElement.style.left   = `${left}px`;
    this._window.nativeElement.style.top    = `${top}px`;
    this._window.nativeElement.style.bottom = `${bottom}px`;
    this._window.nativeElement.style.right  = `${right}px`;

    this._left    = left;
    this._top     = top;
    this._bottom  = bottom;
    this._right   = right;
  };

  constructor(private _windows: WindowsService) {

  }

  public addWindow = (id: string, el: ElementRef) => {
    this._windowId = id;
    this._window = el;
    let count = this._windows.count;
    this.initPosition(50*count, 50*count, 600-(50*count), 600-(50*count));
    this._windows.register(id, el);
  };

  public fullscreen = () => {
    this._fullscreen = true;
    this._window.nativeElement.style.left = 0;
    this._window.nativeElement.style.top = 0;
    this._window.nativeElement.style.right = 0;
    this._window.nativeElement.style.bottom = '40px';
  };

  public default = () => {
    this._fullscreen = false;
    this.setPosition(this._left, this._top, this._right, this._bottom);
  };

}
