import {Component, OnInit, ElementRef, ViewChild, AfterViewInit, Host, HostBinding, HostListener} from '@angular/core';
import {WindowService} from "./window.service";
import {WindowsService} from "../windows.service";
import {RouterOutlet, Router} from "@angular/router";

@Component({
  selector: 'ch-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
  providers: [
    WindowService
  ]
})
export class WindowComponent implements OnInit, AfterViewInit {

  private _windowId: string;

  private _fullscreen: boolean = false;

  @HostBinding('class.drag')    dragOrResizeProcess: boolean = false;
  @HostBinding('class.active')  windowActive: boolean = false;
  @HostBinding('class.hide')    windowHide: boolean = false;

  @HostListener('mousedown') hostClick(ev) {
    this._windows.setActive(this._windowId);
  }

  private _resize(ev, type) {
    let dx;
    switch (type) {
      case 'left':
        let left = ev.x > 0 ? ev.x : 0;
        this._service.setPosition(left, this.windowTop, this.windowRight, this.windowBottom);
        break;
      case 'right':
        dx = ev.x - this.fromX;
        let right = this.windowRight - dx > 0 ? this.windowRight - dx : 0;
        this._service.setPosition(this.windowLeft, this.windowTop, right, this.windowBottom);
        break;
      case 'top':
        let top = ev.y > 0 ? ev.y : 0;
        this._service.setPosition(this.windowLeft, top, this.windowRight, this.windowBottom);
        break;
      case 'bottom':
        dx = ev.y - this.fromY;
        let bottom = this.windowBottom - dx > 40 ? this.windowBottom - dx : 40;
        this._service.setPosition(this.windowLeft, this.windowTop, this.windowRight, bottom);
        break;
    }
  }

  private fromX: number;
  private fromY: number;
  private windowLeft: number;
  private windowRight: number;
  private windowTop: number;
  private windowBottom: number;

  private window = {
    dragStart: (ev) => {
      this.dragOrResizeProcess = true;

      this.fromX = ev.x;
      this.fromY = ev.y;
      this.windowLeft = this._service.left;
      this.windowRight = this._service.right;
      this.windowTop = this._service.top;
      this.windowBottom = this._service.bottom;
    },
    drag: (ev) => {
      let dx = ev.x - this.fromX,
          dy = ev.y - this.fromY;

      this._service.setPosition(this.windowLeft+dx, this.windowTop+dy, this.windowRight-dx, this.windowBottom-dy);
    },
    dragEnd: (ev) => {
      this.dragOrResizeProcess = false;

      let dx = ev.x - this.fromX,
          dy = ev.y - this.fromY;
      this._service.setPosition(this.windowLeft+dx, this.windowTop+dy, this.windowRight-dx, this.windowBottom-dy);
    },

    resizeStart: (ev, type) => {
      this.dragOrResizeProcess = true;

      this.fromX = ev.x;
      this.fromY = ev.y;
      this.windowLeft = this._service.left;
      this.windowRight = this._service.right;
      this.windowTop = this._service.top;
      this.windowBottom = this._service.bottom;
    },
    resize: (ev, type) => {
      this._resize(ev, type)
    },
    resizeEnd: (ev, type) => {
      this.dragOrResizeProcess = false;
      this._resize(ev, type)
    },
  };

  constructor(
    private _window: ElementRef,
    private _service: WindowService,
    private _windows: WindowsService,
    private _outlet: RouterOutlet,
    private _router: Router

  ) {
    _windows.activeWindow$.subscribe(val => {
      this.windowActive = val == this._windowId;
    });
    _windows._windows.subscribe(val => {
      if( val[this._windowId] ) {
        this.windowHide = val[this._windowId].hide;
      }
    })
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    this._windowId = this._outlet.activatedRoute.outlet;
    this._service.addWindow(this._windowId, this._window);
  }

  close = () => {
    this._windows.unregister(this._windowId);
    let outlet: Object = {};
    outlet[this._windowId] = null;
    this._router.navigate(['','desktop',{outlets: outlet}]);
  };

  hide = () => {
    this._windows.hide(this._windowId);
  };

  fullscreen = () => {
    this._fullscreen = true;
    this._service.fullscreen();
  };

  default = () => {
    this._fullscreen = false;
    this._service.default();
  };
}
