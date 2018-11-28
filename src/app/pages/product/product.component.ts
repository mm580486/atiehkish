import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../../products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products = [];
  public product: any;
  mySlideOptions: any;

  constructor(private route: Router , private router: ActivatedRoute) {
    this.route.events.subscribe(params => {
      this.products = products;
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
      this.product =  products.filter(x => x.permalink === this.router.snapshot.paramMap.get('permalink'))[0];
  });
   }

  ngOnInit() {

  }

}
