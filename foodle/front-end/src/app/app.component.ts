import { Component, OnInit } from '@angular/core';
import {DealService } from './deal.service';
import {UserService} from './user.service';
import {throwError} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent implements OnInit {
  /**
   * An array of all the Deal objects from the API
   */
  public deals;


  constructor(private _dealService: DealService, private _userService: UserService) { }

  ngOnInit() {
    this.getDeals();

  }

  getDeals() {
    this._dealService.list().subscribe(
      data => { this.deals = data;


    });
  }}
