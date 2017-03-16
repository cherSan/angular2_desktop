import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss']
})
export class MainProfileComponent implements OnInit {

  constructor() { }

  users = [
    {
      name: "Aleksandr",
      href: 'aleksandr'
    },
    // {
    //   name: "Olesia",
    //   href: 'olesia'
    // },
    // {
    //   name: "Marina",
    //   href: 'marina'
    // },
    // {
    //   name: "Nikolay",
    //   href: 'nikolay'
    // }
  ];

  ngOnInit() {
  }

}
