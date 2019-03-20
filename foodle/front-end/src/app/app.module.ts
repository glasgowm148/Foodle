

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
import { AppTabComponent } from './app-tab-component';
import { MatTabsModule } from '@angular/material';


import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

// Dev added components  - other imports above utilised by these - but these are the main ones.
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import './polyfills';





@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  entryComponents: [AppTabComponent],
  declarations: [AppTabComponent, AppComponent, LoginComponent, MatTabsModule, AppTabComponent],
  bootstrap: [AppTabComponent, AppComponent],
  providers: [BlogPostService, UserService]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


