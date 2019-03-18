import { Component } from '@angular/core';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html'})
export class NgbdCarouselBasic {
  images = [1, 2, 3].map(() => `http://127.0.0.1:5500/foodle/static/images/slider_bg_donut.png?random&t=${Math.random()}`);
}
