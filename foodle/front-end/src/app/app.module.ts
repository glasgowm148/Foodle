import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


// Grid List for aligning angular cards
import { MatGridListModule, MatToolbarModule } from '@angular/material';  // <----- HERE

// Cards + bar at top
import { AppComponent }         from './app.component';
import { TabComponent }   from './tab/tab.component';


import { AppRoutingModule }     from './app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';





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
    ReactiveFormsModule
  ],
  entryComponents: [AppComponent, TabComponent ],
  declarations: [AppComponent, TabComponent ],
  bootstrap: [ AppComponent, TabComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);













/*import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogPostService } from './blog_post.service'
import { UserService } from './user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import { NgbdCarouselBasic } from './carousel-basic';
import { MatTabsModule } from '@angular/material';


import {MatNativeDateModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

// Dev added components  - other imports above utilised by these - but these are the main ones.
// import { AppComponent } from './slider/app.component';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { ExampleNavbarComponent } from './example-navbar/example-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CardsAngularComponent } from './cards-angular/cards-angular.component';
//import './polyfills';





@NgModule({
  imports: [
    AppComponent,
    CardsAngularComponent,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NgbModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  entryComponents: [AppComponent,CardsAngularComponent],
  declarations: [AppComponent, CardsAngularComponent,LoginComponent,ExampleNavbarComponent,
    MatTabsModule, AppComponent, ExampleNavbarComponent, CardsAngularComponent],
  bootstrap: [AppComponent, CardsAngularComponent],
  providers: [BlogPostService, UserService, CardsAngularComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

*/

