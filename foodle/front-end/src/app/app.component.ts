import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'app';


  pictures = [
    {
      id: 1,
      title: 'SOBAAA',
      img: 'static/images/soba.png'
    },
    {
      id: 2,
      title: 'dom',
      img: 'static/images/dominos.png'
    },
    {
      id: 3,
      title: 'dom',
      img: 'static/images/dominos.png'
    },
    {
      id: 4,
      title: 'SOBAAA',
      img: 'static/images/soba.png'
    },
    {
      id: 5,
      title: 'oneup',
      img: 'static/images/oneup.png'
    },
    {
      id: 6,
      title: 'SOBAAA',
      img: 'static/images/soba.png'
    },
  ];

  tiles = [
    { text: 'Snacks', cols: 2, rows: 1, color: '#91B2FF', img: 'static/images/soba.png' },
    { text: 'Under £5', cols: 1, rows: 1, color: '#B7A0E8' },
    { text: 'Lunch', cols: 1, rows: 2, color: '#FF9191', img: 'static/images/soba.png' },
    { text: 'under 5minutes away', cols: 3, rows: 1, color: '#D9EDD9' },
  ];


}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
