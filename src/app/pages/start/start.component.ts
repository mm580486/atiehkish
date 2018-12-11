import { startup } from './../../startup';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public products = [];
  public product: any;
  mySlideOptions: any;

  constructor(private route: Router, private router: ActivatedRoute) {
    this.route.events.subscribe(params => {
      this.products = startup;
      this.mySlideOptions = {items: 1, dots: false, nav: false, margin: 10, lazyLoad: true,
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
      this.product =  startup.filter(x => x.permalink === this.router.snapshot.paramMap.get('permalink'))[0];
  });
   }

  ngOnInit() {

  }
}
