import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { events } from './../../events';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public products = [];
  public product: any;
  mySlideOptions: any;

  constructor(private route: Router, private router: ActivatedRoute) {
    this.route.events.subscribe(params => {
      this.products = events;
      this.mySlideOptions = {items: 1, dots: false, nav: true, margin: 10, lazyLoad: true,
        itemsDesktop: [1400, 1],
        itemsDesktopSmall: [1100, 1],
        itemsTablet: [700, 1],
        itemsMobile: [500, 1],
        responsive : {
          480 : { items : 1  }, // from zero to 480 screen width 4 items
          768 : { items : 2  }, // from 480 screen widthto 768 6 items
          1024 : { items : 4 }
        },
    };
      this.product =  events.filter(x => x.permalink === this.router.snapshot.paramMap.get('permalink'))[0];
  });
   }

  ngOnInit() {

  }
}
