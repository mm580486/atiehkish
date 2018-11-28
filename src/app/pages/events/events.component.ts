import { events } from './../../events';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  mySlideImages: any;
  myCarouselImages: any;
  mySlideOptions: any;
  myCarouselOptions: any;
  images: any;
  public products: any;
  constructor() {
    this.products = events;
   }

  ngOnInit() {
    this.mySlideImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
    this.myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
    this.mySlideOptions = {items: 3, dots: false, nav: true, margin: 10, autoPlay: true, loop: true, autoplay: true, autoplayTimeout: 4000};
    this.myCarouselOptions = {items: 3, dots: true, nav: true};
  }


}
