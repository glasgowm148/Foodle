import { Component, OnInit } from '@angular/core';
import {DealService } from './deal.service';
import {UserService} from './user.service';
import {throwError} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent implements OnInit {
  values: number[];


    constructor(private dealService: DealService) {
      this.dealService.list().subscribe(z => {
        this.values = this.values;
      });}

}










  /**
   * An array of all the Deal objects from the API

  public deals;
  info: any;




  constructor(private _dealService: DealService, private _userService: UserService) { }

  ngOnInit() {
    this.getDeals();

  }


   */
