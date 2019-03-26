import { Component } from '@angular/core';
import { DealService } from '../app-deal/deal.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-index',
  templateUrl: './app-index.html',
  styleUrls: ['./app-index.css']
})
export class AppIndex {


  public sliderVE = {
    'autoTicks': false,
    'disabled': false,
    'invert': false,
    'max': 100,
    'min': 0,
    'showTicks': false,
    'step': 1,
    'thumbLabel': false,
    'value': 0,
    'vertical': false,
    'tickInterval': 1,
    'checked': false
  };

  public sliderVEG = {
    'autoTicks': false,
    'disabled': false,
    'invert': false,
    'max': 100,
    'min': 0,
    'showTicks': false,
    'step': 1,
    'thumbLabel': false,
    'value': 0,
    'vertical': false,
    'tickInterval': 1,
    'checked': false
  };

  public sliderG = {
    'autoTicks': false,
    'disabled': false,
    'invert': false,
    'max': 100,
    'min': 0,
    'showTicks': false,
    'step': 1,
    'thumbLabel': false,
    'value': 0,
    'vertical': false,
    'tickInterval': 1,
    'checked': false
  };

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
