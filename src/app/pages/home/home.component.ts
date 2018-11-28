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
    // tslint:disable-next-line:max-line-length
    this.mySlideImages = [`https://stmed.net/sites/default/files/transparent-cubes-wallpapers-25325-3575516.jpg`, `https://picsum.photos/640/480?image=3`, `https://picsum.photos/640/481?image=22`];
    this.myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
    this.mySlideOptions = {items: 1, dots: true, nav: false, autoPlay: true, loop: true, autoplay: true, autoplayTimeout: 8000};
    this.myCarouselOptions = {items: 3, dots: true, nav: true, autoPlay: true, loop: true, autoplay: true, autoplayTimeout: 8000};


  }

  toggleSize() {
    if ($('#read_btn').html() === 'کمتر بخوانید') {
      $('.description-box').animate({height: 450}, 500);
      $('#read_btn').html('بیشتر بخوانید');

      $('.more_content').slideUp();
    } else {
      $('.description-box').animate({height: 800}, 500);
      $('#read_btn').html('کمتر بخوانید');
      $('.more_content').slideDown();
    }

  }

}
