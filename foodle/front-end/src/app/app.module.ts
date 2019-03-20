

import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogPostService } from './blog_post.service';
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
import { TabComponent } from './tab/tab.component';

import { LoginComponent } from './login/login.component';
import { ExampleNavbarComponent } from './example-navbar/example-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CardsAngularComponent } from './cards-angular/cards-angular.component';
//import './polyfills';





@NgModule({
  imports: [
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
  entryComponents: [TabComponent,CardsAngularComponent],
  declarations: [TabComponent, CardsAngularComponent,LoginComponent,
    MatTabsModule, TabComponent, ExampleNavbarComponent, CardsAngularComponent],
  bootstrap: [TabComponent, CardsAngularComponent],
  providers: [BlogPostService, UserService, CardsAngularComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


