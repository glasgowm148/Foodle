import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import {DealService } from '../app-deal/deal.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-example-navbar',
  templateUrl: './example-navbar.component.html',
  styleUrls: ['./example-navbar.component.css']
})
export class ExampleNavbarComponent {
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


  ngOnDestroy() {
      this.valueSub.unsubscribe();
  }}
