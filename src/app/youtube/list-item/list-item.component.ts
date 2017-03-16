import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ch-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  item: Object;

  isPlay: boolean = false;

  play = (isPlay) => {
    this.isPlay = isPlay;
  };

  constructor() { }

  ngOnInit() {
  }

}
