import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogPostService } from './blog_post.service';
import { UserService } from './user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgbdCarouselBasic } from './carousel-basic';


@NgModule({
  declarations: [
    AppComponent, NgbdCarouselBasic
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, NgbModule
  ],
  providers: [BlogPostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


