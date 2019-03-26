import { Component, OnInit } from '@angular/core';
import {DealService } from './app-deal/deal.service';
import {UserService} from './app-deal/user.service';
import {throwError} from 'rxjs';

import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  name = 'Angular';
  values: any;
  observableValues: Observable<any>;
  valueSub: Subscription;

  constructor(private dealService: DealService) {
      this.valueSub = this.dealService.list().subscribe(z => {
        this.values = z;
      });
      this.values = this.dealService.list();

    //  this.observableValues = this.dealService.list();

  }


  /*ngOnDestroy() {
      this.valueSub.unsubscribe();
  }*/



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
