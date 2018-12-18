import { startup } from './../../startup';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {
  mySlideImages: any;
  myCarouselImages: any;
  mySlideOptions: any;
  myCarouselOptions: any;
  images: any;
  public products: any;
  constructor() {
    this.products = startup;
   }

  ngOnInit() {
    this.mySlideImages = ['/assets/img/slider/04.jpg', '/assets/img/slider/11.jpg', '/assets/img/slider/12.jpg'];
    this.myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
    this.mySlideOptions = {items: 1, dots: false, nav: true, margin: 10, autoPlay: true, loop: true, autoplay: true, autoplayTimeout: 4000};
    this.myCarouselOptions = {items: 1, dots: true, nav: true,
      itemsDesktop: [1400, 1],
      itemsDesktopSmall: [1100, 1],
      itemsTablet: [700, 1],
      itemsMobile: [500, 1],
      responsive : {
        480 : { items : 1  }, // from zero to 480 screen width 4 items
        768 : { items : 2  }, // from 480 screen widthto 768 6 items
        1024 : { items : 1 }
      }};
  }

}
