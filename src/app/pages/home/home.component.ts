import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mySlideImages: any;
  myCarouselImages: any;
  mySlideOptions: any;
  myCarouselOptions: any;
  images: any;
  constructor() { }

  ngOnInit() {
    this.mySlideImages = [1, 2, 3].map((i) => `https://picsum.photos/640/480?image=${i}`);
    this.myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
    this.mySlideOptions = {items: 1, dots: true, nav: false};
    this.myCarouselOptions = {items: 3, dots: true, nav: true};
  }

}
