import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  tiles = [
    {text: 'Snacks', cols: 2, rows: 1, color: '#91B2FF'},
    {text: 'Gluten-Free', cols: 1, rows: 1, color: '#B7A0E8'},
    {text: 'Lunch', cols: 1, rows: 2, color: '#FF9191'},
    {text: 'Vegan', cols: 3, rows: 1, color: '#D9EDD9'},
  ];
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
