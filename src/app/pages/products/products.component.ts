import { Component, OnInit } from '@angular/core';
import { products } from '../../products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  mySlideImages: any;
  myCarouselImages: any;
  mySlideOptions: any;
  myCarouselOptions: any;
  images: any;
  public products: any;
  constructor() {
    this.products = products;
   }

  ngOnInit() {
    this.mySlideImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
    this.myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
    this.mySlideOptions = {items: 3, dots: false, nav: true, margin: 10, autoPlay: true, loop: true, autoplay: true, autoplayTimeout: 4000};
    this.myCarouselOptions = {items: 3, dots: true, nav: true};
  }

}
