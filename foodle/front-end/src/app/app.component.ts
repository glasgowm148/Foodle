import { Component, OnInit } from '@angular/core';
import {DealService } from './deal.service';
import {UserService} from './user.service';
import {throwError} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent implements OnInit {
  public message: string;
    public values: any[];

    constructor(
        private dataService: DealService,
        private userService: UserService) {
        this.message = 'Hello from HomeComponent constructor';
    }

    ngOnInit() {

        this.dataService
            .list()
            .subscribe((data: any[]) => this.values = data,

            );
    }
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
