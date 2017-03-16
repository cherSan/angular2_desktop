import { Component, OnInit } from '@angular/core';
import {WindowsService} from "../windows.service";

@Component({
  selector: 'ch-control-panel',
  templateUrl: 'control-panel.component.html',
  styleUrls: ['control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  private windows: Array<string> = [];
  private activeWindow: string;

  constructor(
    private _windows: WindowsService
  ) {
    this._windows._windows.subscribe(val => {
      this.windows = [];
      for( let windowId in val ) {
        this.windows.push(val[windowId]);
      }
    });
    this._windows.activeWindow$.subscribe(val => {
      this.activeWindow = val;
    })
  }

  openOrActivate = (windowId) => {
    this._windows.show(windowId);
  };

  ngOnInit() {
  }

}
