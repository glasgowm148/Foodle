import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogPostService } from './blog_post.service';
import { UserService } from './user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import { NgbdCarouselBasic } from './carousel-basic';
import { LoginComponent } from './login/login.component';
import { AppTabComponent } from './app-tab-component';
import { MatTabsModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent, LoginComponent, MatTabsModule, AppTabComponent //NgbdCarouselBasic
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, HttpModule, NgbModule, ReactiveFormsModule
  ],
  providers: [BlogPostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
