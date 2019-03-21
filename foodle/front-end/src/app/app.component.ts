import { Component, OnInit } from '@angular/core';
import { IImage } from './material-nav/modules/slideshow/IImage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent implements OnInit {
  title = 'app';


  pictures = [
    {
      id: 1,
      title: 'SOBAAA',
      img: 'static/images/soba.png'
    },
    {
      id: 2,
      title: 'dom',
      img: 'static/images/dominos.png'
    },
    {
      id: 3,
      title: 'dom',
      img: 'static/images/dominos.png'
    },
    {
      id: 4,
      title: 'SOBAAA',
      img: 'static/images/soba.png'
    },
    {
      id: 5,
      title: 'oneup',
      img: 'static/images/oneup.png'
    },
    {
      id: 6,
      title: 'SOBAAA',
      img: 'static/images/soba.png'
    },
  ];

  tiles = [
    { text: 'Snacks', cols: 2, rows: 1, color: '#91B2FF', img: 'static/images/soba.png' },
    { text: 'Under £5', cols: 1, rows: 1, color: '#B7A0E8' },
    { text: 'Lunch', cols: 1, rows: 2, color: '#FF9191', img: 'static/images/soba.png' },
    { text: 'under 5minutes away', cols: 3, rows: 1, color: '#D9EDD9' },
  ];

  imageUrls: (string | IImage)[] = [
    { url:
      'static/images/soba.png',
      caption: 'The first slide', href: '#config' },
    { url:
      'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg',
      clickAction: () => alert('custom click function') },
    { url:
      'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
      caption: 'Apple TV', href: 'https://www.apple.com/' },
    { url: 'assets/kitties.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;

  ngOnInit() {
    // adding an image url dynamically.
    setTimeout(() => {
      console.log('adding an image url dynamically.');
      this.imageUrls.push('https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg');
    }, 2000);
    console.log(`
                                  /   \\
 _                        )      ((   ))     (
(@)                      /|\\      ))_((     /|\\
|-|                     / | \\    (/\\|/\\)   / | \\                      (@)
| | -------------------/--|-voV---\`|'/---Vov-|--\\---------------------|-|
|-|                         '^\`   (o o)  '^\`                          | |
| |                               \`\\Y/'                               |-|
|-|                                                                   | |
| |                                Hey                                |-|
|-|                                                                   | |
| |                                                                   |-|
|_|___________________________________________________________________| |
(@)              l   /\\ /         ( (       \\ /\\   l                \`\\|-|
                 l /   V           \\ \\       V   \\ l                  (@)
                 l/                _) )_          \\I
                                   \`\\ /'
				                     \`
    `);
  }
}



/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
