import {Injectable, ElementRef} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class WindowsService {

  public _windows:BehaviorSubject<Object> = new BehaviorSubject({});
  private _activeWindow:BehaviorSubject<string> = new BehaviorSubject('');
  public  activeWindow$:Observable<string> = this._activeWindow.asObservable();

  private _count: number = 1;
  get count (): number {
    return this._count;
  }


  public setActive = (id?: string) => {
    if( id ) {
      this._activeWindow.next(id);
    } else {
      this._activeWindow.next('');
    }
  };

  public register = (id: string, window: ElementRef) => {
    this._count++;
    let windows = this._windows.getValue();
    windows[id] = {
      id: id,
      window: window,
      hide: false
    };
    this._windows.next(windows);
    this.setActive(id);
  };

  public unregister = (id: string) => {
    this._count--;
    let windows = this._windows.getValue();
    delete windows[id];
    this._windows.next(windows);
    this.setActive();
  };

  public hide = (id: string) => {
    let windows = this._windows.getValue();
    windows[id].hide = true;
    this._windows.next(windows);
    this.setActive();
  };

  public show = (id: string) => {
    let windows = this._windows.getValue();
    windows[id].hide = false;
    this._windows.next(windows);
    this.setActive(id);
  };

  constructor() { }

}
