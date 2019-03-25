import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Grid List for aligning angular cards
import { MatGridListModule, MatToolbarModule } from '@angular/material';  // <----- HERE

// Cards + bar at top
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppIndex } from './app-index/app-index'
import { CardsAngularComponent } from './cards-angular/cards-angular.component';
import { DealService } from './app-deal/deal.service';

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatGridListModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, AppIndex, CardsAngularComponent],
  providers: [ DealService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);





