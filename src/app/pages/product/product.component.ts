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
      this.mySlideOptions = {items: 3, dots: false, nav: true, margin: 10};
      this.product =  products.filter(x => x.permalink === this.router.snapshot.paramMap.get('permalink'))[0];
  });
   }

  ngOnInit() {

  }

}
