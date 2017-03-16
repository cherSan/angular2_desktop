import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ch-core',
  templateUrl: 'core.component.html',
  styleUrls: ['core.component.scss']
})
export class CoreComponent implements OnInit {

  @ViewChild('youtube') youtube;

  public openWindow = (module, page) => {
    let outlet: Object = {};
    outlet[module] = [page];
    this._router.navigate(['','desktop',{outlets: outlet}]);
  };

  constructor(private _router: Router) {

  }

  ngOnInit() {
  }

}
